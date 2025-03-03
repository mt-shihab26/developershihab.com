import { useEffect, useRef, useState } from "react";

import { Container } from "~/components/ui/container";

import { Avatar, AvatarContainer } from "./header-avatar";
import { DesktopNavigation } from "./header-desktop-navigation";
import { MobileNavigation } from "./header-mobile-navigation";
import { ThemeToggle } from "./header-theme-toggle";

const clamp = (num: number, a: number, b: number) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return Math.min(Math.max(num, min), max);
};

export const Header = ({ pathname }: { pathname: string }) => {
    const isHomePage = pathname === "/";

    const headerRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLAnchorElement>(null);

    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        const downDelay = avatarRef.current?.offsetTop ?? 0;
        const upDelay = 64;

        function setProperty(property: string, value: string) {
            document.documentElement.style.setProperty(property, value);
        }

        function removeProperty(property: string) {
            document.documentElement.style.removeProperty(property);
        }

        function updateHeaderStyles() {
            if (!headerRef.current) return;

            const { top, height } = headerRef.current.getBoundingClientRect();
            const scrollY = clamp(
                window.scrollY,
                0,
                document.body.scrollHeight - window.innerHeight
            );

            if (isInitial) {
                setProperty("--header-position", "sticky");
            }

            setProperty("--content-offset", `${downDelay}px`);

            if (isInitial || scrollY < downDelay) {
                setProperty("--header-height", `${downDelay + height}px`);
                setProperty("--header-mb", `${-downDelay}px`);
            } else if (top + height < -upDelay) {
                const offset = Math.max(height, scrollY - upDelay);
                setProperty("--header-height", `${offset}px`);
                setProperty("--header-mb", `${height - offset}px`);
            } else if (top === 0) {
                setProperty("--header-height", `${scrollY + height}px`);
                setProperty("--header-mb", `${-scrollY}px`);
            }

            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty("--header-inner-position", "fixed");
                removeProperty("--header-top");
                removeProperty("--avatar-top");
            } else {
                removeProperty("--header-inner-position");
                setProperty("--header-top", "0px");
                setProperty("--avatar-top", "0px");
            }
        }

        function updateAvatarStyles() {
            if (!isHomePage) {
                return;
            }

            const fromScale = 1;
            const toScale = 36 / 64;
            const fromX = 0;
            const toX = 2 / 16;

            const scrollY = downDelay - window.scrollY;

            let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
            scale = clamp(scale, fromScale, toScale);

            let x = (scrollY * (fromX - toX)) / downDelay + toX;
            x = clamp(x, fromX, toX);

            setProperty("--avatar-image-transform", `translate3d(${x}rem, 0, 0) scale(${scale})`);

            const borderScale = 1 / (toScale / scale);
            const borderX = (-toX + x) * borderScale;
            const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

            setProperty("--avatar-border-transform", borderTransform);
            setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
        }

        function updateStyles() {
            updateHeaderStyles();
            updateAvatarStyles();
            setIsInitial(false);
        }

        updateStyles();
        window.addEventListener("scroll", updateStyles, { passive: true });
        window.addEventListener("resize", updateStyles);

        return () => {
            window.removeEventListener("scroll", updateStyles);
            window.removeEventListener("resize", updateStyles);
        };
    }, [isHomePage, isInitial]);

    return (
        <>
            <header
                className="pointer-events-none relative z-50 flex flex-col"
                style={{
                    height: "var(--header-height)",
                    marginBottom: "var(--header-mb)"
                }}
            >
                {isHomePage && (
                    <>
                        <div className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]" />
                        <Container
                            className="top-0 order-last -mb-3 pt-3"
                            style={{ position: "var(--header-position)" as any }}
                        >
                            <div
                                className="top-(--avatar-top,--spacing(3)) w-full"
                                style={{ position: "var(--header-inner-position)" as any }}
                            >
                                <div className="relative">
                                    <AvatarContainer
                                        className="absolute top-3 left-0 origin-left transition-opacity"
                                        style={{
                                            opacity: "var(--avatar-border-opacity, 0)",
                                            transform: "var(--avatar-border-transform)"
                                        }}
                                    />
                                    <Avatar
                                        large
                                        className="block h-16 w-16 origin-left"
                                        style={{ transform: "var(--avatar-image-transform)" }}
                                        ref={avatarRef}
                                    />
                                </div>
                            </div>
                        </Container>
                    </>
                )}
                <div
                    ref={headerRef}
                    className="top-0 z-10 h-16 pt-6"
                    style={{ position: "var(--header-position)" as any }}
                >
                    <Container
                        className="top-(--header-top,--spacing(6)) w-full"
                        style={{ position: "var(--header-inner-position)" as any }}
                    >
                        <div className="relative flex gap-4">
                            <div className="flex flex-1">
                                {!isHomePage && (
                                    <AvatarContainer>
                                        <Avatar />
                                    </AvatarContainer>
                                )}
                            </div>
                            <div className="flex flex-1 justify-end md:justify-center">
                                <MobileNavigation
                                    className="pointer-events-auto md:hidden"
                                    pathname={pathname}
                                />
                                <DesktopNavigation
                                    className="pointer-events-auto hidden md:block"
                                    pathname={pathname}
                                />
                            </div>
                            <div className="flex justify-end md:flex-1">
                                <div className="pointer-events-auto">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
        </>
    );
};
