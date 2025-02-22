import { meta } from "~/lib/meta";

export default function ArticlesIndex({ articles }) {
    return (
        <>
            <NextSeo
                title="Articles - Brian Ketelsen"
                description={meta.description}
                canonical="https://brian.dev/articles"
                openGraph={{
                    url: "https://brian.dev/articles",
                    images: [
                        {
                            url: `https://og.brian.dev/api/og?title=Articles&desc=${headline}`,
                            width: 1200,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg"
                        }
                    ],
                    siteName: "brian.dev"
                }}
            />
        </>
    );
}
