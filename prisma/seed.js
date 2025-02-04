const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const bcrypt = require("bcryptjs");

async function main() {
  const categories = [
    {
      id: 1,
      title: "GameBoy",
      slug: "gameboy",
      image: "gameboy.jpg",
      core: "gb",
    },
    {
      id: 2,
      title: "SEGA",
      slug: "sega",
      image: "sega.jpg",
      core: "segaMD",
    },
    {
      id: 3,
      title: "Attari",
      slug: "atari",
      image: "atari.jpg",
      core: "atari2600",
    },

    {
      id: 4,
      title: "Nintendo ES",
      slug: "nes",
      image: "super-nintendo.jpg",
      core: "nes",
    },
    {
      id: 5,
      title: "Nintendo 64",
      slug: "nintendo-64",
      image: "n64.jpg",
      core: "n64",
    },
  ];

  const games = [
    {
      id: 1,
      title: "Aladdin",
      slug: "aladdin",
      image: "cadillacs-and-dinosaurs.jpg",
      description:
        "A vibrant action platformer based on Disney’s Aladdin, featuring acrobatic gameplay and sword fights as Aladdin tries to defeat Jafar and save Princess Jasmine.",
      game_url: "Aladdin.zip",
      published: true,
      categories: [2],
      featured: true,
    },
    {
      id: 2,
      title: "PacMan 1981",
      slug: "pacman-1981-attari",
      image: "pacman.png",
      description:
        "Pac-Man (1981, Atari) is a classic arcade game where players control Pac-Man, a yellow, circular character who navigates a maze, eating pellets while avoiding four ghosts—Blinky, Pinky, Inky, and Clyde. Consuming power pellets temporarily turns the ghosts blue, allowing Pac-Man to eat them for extra points. Originally developed by Namco and later ported to Atari, Pac-Man became one of the most iconic and influential video games of all time.",
      game_url: "pacman.zip",
      published: true,
      categories: [3],
      featured: false,
    },
    {
      id: 3,
      title: "Sonic and Knuckles",
      slug: "sonic-and-knuckles",
      image: "disney-s-hercules.jpg",
      description:
        "A fast-paced platformer featuring Sonic and Knuckles, each with unique abilities, battling Dr. Robotnik across various zones to stop his evil plans.",
      game_url: "sonic3.zip",
      published: true,
      categories: [2],
      featured: true,
    },
    {
      id: 4,
      title: "The Amazing Spiderman",
      slug: "the-amazing-spiderman",
      image: "biaofeng-zhanjing.jpg",
      description:
        "A side-scrolling action game where Spider-Man battles villains like Mysterio and Venom while swinging across different levels.",
      game_url: "amazing-spiderman.zip",
      published: true,
      categories: [1],
      featured: true,
    },
    {
      id: 5,
      title: "Batman Return of the Joker",
      slug: "batman-return-of-the-joker",
      image: "street-fighter-ii.jpg",
      description:
        "An action-packed game where Batman fights Joker’s minions through platforming and combat sequences.",
      game_url: "batman-return-of-joker.zip",
      published: true,
      categories: [1],
      featured: true,
    },
    {
      id: 6,
      title: "Contra The Alien Wars",
      slug: "contra-the-alien-wars",
      image: "captain-commando.jpg",
      description:
        "A fast-paced run-and-gun shooter where players battle an alien invasion using powerful weapons and side-scrolling action.",
      game_url: "contra-alien-wars.zip",
      published: true,
      categories: [1],
      featured: true,
    },
    {
      id: 7,
      title: "Super Mario 64",
      slug: "super-mario-64",
      image: "super-mario-64.jpg",
      description:
        "A groundbreaking 3D platformer where Mario explores Peach’s Castle, collecting Power Stars to rescue Princess Peach from Bowser.",
      game_url: "mario.zip",
      published: true,
      categories: [5],
      featured: true,
    },
    {
      id: 8,
      title: "Streets of Rage 3",
      slug: "streets-of-rage-3",
      image: "automobili-lamborghini.jpg",
      description:
        "A classic beat ‘em up where players take on street gangs and a corrupt organization using hand-to-hand combat and weapons.",
      game_url: "streets-of-rage-3.zip",
      published: true,
      categories: [2],
      featured: true,
    },
    {
      id: 9,
      title: "River Raid 1982",
      slug: "river-raid-1982",
      image: "centre-court-tennis.jpg",
      description:
        "A vertically scrolling shooter where players pilot a fighter jet over a river, destroying enemy bridges, ships, and helicopters while managing fuel.",
      game_url: "riverraid1982.zip",
      published: true,
      categories: [3],
      featured: false,
    },
    {
      id: 10,
      title: "PitFall 1982",
      slug: "pitfall-1982",
      image: "rayman-2-the-great-escape.jpg",
      description:
        "One of the earliest platformers, where players guide Pitfall Harry through jungles filled with obstacles like quicksand, scorpions, and swinging vines to collect treasures.",
      game_url: "pitfall1982.zip",
      published: true,
      categories: [3],
      featured: false,
    },
    {
      id: 11,
      title: "Teenage Mutant Ninja Turtles",
      slug: "ninja-turtle",
      image: "rayman-2-the-great-escape.jpg",
      description:
        "A side-scrolling action game where players control the four Ninja Turtles, switching between them to battle enemies and rescue April O'Neil from Shredder’s forces.",
      game_url: "NinjaTurtles.zip",
      published: true,
      categories: [4],
      featured: true,
    },
    {
      id: 12,
      title: "Ultimate Mortal Kombat 3",
      slug: "ultimate-mortal-kombat-3",
      image: "teenage-mutant-hero-turtles.jpg",
      description:
        "A legendary fighting game with brutal fatalities, featuring a large roster of characters like Scorpion, Sub-Zero, and Liu Kang.",
      game_url: "mk3.zip",
      published: true,
      categories: [2],
      featured: true,
    },
    {
      id: 13,
      title: "Super Mario Bros 3",
      slug: "super-mario-bros-3",
      image: "teenage-mutant-hero-turtles.jpg",
      description:
        "With the familiar travel genre, join “Super Mario Bros. 3 ”will bring many interesting adventures. Similar to other versions of “Super Mario”, you will participate in controlling “Luigi or Mario” to overcome many different challenges of the game. When participating in the challenge, you will have to overcome 8 different kingdoms. ",
      game_url: "mario3.zip",
      published: true,
      categories: [4],
      featured: true,
    },
    {
      id: 14,
      title: "Duck Tales",
      slug: "duck-tales",
      image: "teenage-mutant-hero-turtles.jpg",
      game_url: "ducktales.zip",
      description:
        "Scrooge McDuck is a wealthy boss who loves rare treasures. Coming to DuckTales, you will be on the journey to find 5 special treasures of Scrooge McDuck. In addition, these 5 treasures will be hidden in 5 different lands. To be able to collect all 5 treasures, you must overcome many obstacles and defeat the bosses at the end of each land.",
      published: true,
      categories: [4],
      featured: true,
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        id: category.id,
      },
      update: {
        title: category.title,
        image: category.image,
        core: category.core,
        slug: category.slug,
      },
      create: {
        id: category.id,
        title: category.title,
        image: category.image,
        core: category.core,
        slug: category.slug,
      },
    });
  }

  for (const game of games) {
    await prisma.game.upsert({
      where: {
        id: game.id,
      },
      update: {
        title: game.title,
        slug: game.slug,
        image: game.image,
        description: game.description,
        game_url: game.game_url,
        published: game.published,
        categories: {
          set: game.categories.map((categoryId) => ({ id: categoryId })),
        },
        featured: game.featured,
      },
      create: {
        id: game.id,
        title: game.title,
        slug: game.slug,
        image: game.image,
        description: game.description,
        game_url: game.game_url,
        published: game.published,
        categories: {
          connect: game.categories.map((categoryId) => ({ id: categoryId })),
        },
        featured: game.featured,
      },
    });
  }

  //   const password = await bcrypt.hash("password", 12);
  //   const email = "admin@admin.com"

  //   const user = await prisma.user.upsert({
  //     where: { email: email },
  //     update: {},
  //     create: {
  //       name: "Admin",
  //       email: email,
  //       password: password,
  //       role: "admin"
  //     }
  //   })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
