import { useRef } from "react";

import { Container } from "~/components/ui/container";

import { Avatar, AvatarContainer } from "./header-avatar";
import { DesktopNavigation } from "./header-desktop-navigation";
import { MobileNavigation } from "./header-mobile-navigation";
import { ThemeToggle } from "./header-theme-toggle";

export const Header = ({ pathname }: { pathname: string }) => {
    const isHomePage = pathname === "/";
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <header className="pointer-events-none relative z-50 flex flex-col">
                <div ref={headerRef} className="z-10 h-16 pt-6">
                    <Container className="w-full">
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
                {isHomePage ? (
                    <Container>
                        <div className="w-full relative py-9">
                            <AvatarContainer className="absolute top-3 left-0 origin-left transition-opacity" />
                            <Avatar large className="block h-16 w-16 origin-left" />
                        </div>
                    </Container>
                ) : (
                    <div className="h-20" />
                )}
            </header>
        </>
    );
};
