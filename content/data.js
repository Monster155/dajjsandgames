// Simple content module: edit this file to add games or contacts.
// Follow the master programming rules: clear naming, small structures.

window.siteContent = {
    studio: {
        name: "Dajjsand Games",
        tagline: "Creating memorable game experiences",
    },
    contacts: [
        {
            id: "telegram",
            label: "Telegram",
            url: "https://t.me/dajjsand",
            display: "t.me/dajjsand",
            icon: "", // placeholder, replaced in UI
        },
        {
            id: "email",
            label: "Email",
            url: "mailto:damir180501@mail.ru",
            display: "damir180501@mail.ru",
            icon: "@",
        },
    ],
    games: [
        // Example item — duplicate and adjust
        {
            id: "Die2Win",
            title: "Die 2 Win",
            tagline: "A dynamic first-person shooter with abilities",
            images: [
                "images/Die2Win/d2w.png"
            ],
            platforms: ["PC"],
            genres: ["Shooter"],
            // Set negative year to indicate active development
            year: -1,
            inDevelopment: true,
            links: [
                { label: "Coming soon", url: "", variant: "primary", hoverText: "Prototype build — coming soon" },
                { label: "Telegram", url: "https://t.me/gungamestudio", hoverText: "Follow dev updates on Telegram" },
            ],
        },
        {
            id: "MonstersCrush",
            title: "Monsters Crush: Auto Clicker",
            tagline: "Tap harder to defeat monsters and assemble a team to help you",
            images: [
                "images/MonstersCrush/MonstersCrush0.png",
                "images/MonstersCrush/MonstersCrush1.png",
                "images/MonstersCrush/MonstersCrush2.png",
                "images/MonstersCrush/MonstersCrush3.png",
                "images/MonstersCrush/MonstersCrush4.png",
                "images/MonstersCrush/MonstersCrush5.png",
            ],
            platforms: ["Mobile"],
            genres: ["Auto Clicker"],
            year: 2022,
            links: [
                { label: "Play Market", url: "https://play.google.com/store/apps/details?id=com.midcore.monsterscrush", variant: "primary", hoverText: "Open Play Market page" },
                { label: "Website", url: "https://midcore.pro/projects/monster-crush/", hoverText: "Open game website" },
            ],
        },
        {
            id: "PiratesAndPuzzles",
            title: "Pirates And Puzzles",
            tagline: "Collect unique crew and battle on PvP ships battle in match-3!",
            images: [
                "images/PiratesAndPuzzles/piratesAndPuzzles0.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles1.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles2.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles3.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles4.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles5.png",
                "images/PiratesAndPuzzles/piratesAndPuzzles6.png",
            ],
            platforms: ["Mobile"],
            genres: ["Match-3", "PVP"],
            year: 2023,
            links: [
                { label: "Play Market", url: "https://play.google.com/store/apps/details?id=com.herocraft.game.pirates.and.puzzles.match.pvp", variant: "primary", hoverText: "Open Play Market page" },
                { label: "App Store", url: "https://apps.apple.com/ru/app/pirates-puzzles-pvp-league/id1483755748", hoverText: "Open App Store page" },
                { label: "Website", url: "https://midcore.pro/projects/pirates-and-puzzles/", hoverText: "Open game website" },
            ],
        },
        {
            id: "puzzle-atelier",
            title: "Puzzle Atelier",
            tagline: "Minimalist logic puzzles with satisfying difficulty curves",
            images: [
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542751086-037d632b8590?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
            ],
            platforms: ["Mobile", "PC"],
            genres: ["Puzzle"],
            year: 2023,
            links: [
                { label: "Steam", url: "https://example.com/steam/puzzle-atelier", variant: "primary", hoverText: "Open Steam page" },
                { label: "Website", url: "https://example.com/puzzle-atelier", hoverText: "Visit official website" },
            ],
        },
    ],
};


