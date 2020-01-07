const riverDescrip = [
    {
        id: 'r1',
        name: 'American River, Sacramento',
        description: `This section runs all year. There are multiple access areas, but a popular varition is using Sunrise Blvd to Watt Ave for put-in and take-out. It is predominantly class I with San Juan Rapids, a popular playboating location being the sole class II.`,
        creekin: `http://cacreeks.com/amer-low.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/4538`,
        flow: `https://www.dreamflows.com/graphs/day.076.php`,
        outfitters: [
            {link: `https://raftrentals.com/`, name: `American River Raft Rentals`}],
        takeout: `38.566566%2C-121.383601`,
        lat: `38.566566`,
        long: `-121.38360`
    },
    {
        id: 'r2',
        name: 'South Fork American River, Coloma to Greenwood',
        description: 'Dependable flows through Spring and Summer, weekend flows all year. Put-in at Marshall Gold Discovery State Park, take-out at Greenwood Creek. Class I and II rapids are interspersed with calm, scenic stretches. The last rapid on the run, Highway Rapid (II+), is the longest and one of the most challenging rapids.',
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/5117`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`}, {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.malode.com/`, name: `Mother Lode`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `38.826396%2C-120.949185`,
        lat: `38.826396`,
        long: `-120.949185`
    },
    {
        id: 'r3',
        name: 'South Fork American River, Upper',
        description: 'Dependable flows through Spring and Summer, weekend flows all year. Meatgrinder Rapid (III) gets your heart pumping immediately and Troublemaker (III) sends you into Marshall Gold Discovery State Park. Because of those two rapids, this run is considered slightly more challenging than the SFA, Lower run.',
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/148`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`}, {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.malode.com/`, name: `Mother Lode`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `38.805789%2C-120.894110`,
        lat: `38.805789`,
        long: `-120.894110`
    },
    {
        id: 'r4',
        name: 'South Fork American River, Lower',
        description: `Dependable flows through Spring and Summer, weekend flows all year. Considered slightly less challenging than the SFA, Upper run. Notable rapids inclue Fowler's Rock (III), Satan's Cesspool (III), and Hospital Bar (III).`,
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/4068`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`}, {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.malode.com/`, name: `Mother Lode`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `38.772974%2C-121.035074`,
        lat: `38.772974`,
        long: `-121.035074`
    },
    {
        id: 'r5',
        name: 'Truckee River',
        description: 'You can put-in on the Little Truckee or at Boca Bridge. Plenty of class II rapids until the end of the run where Jaws Rapid (III) and Bronco Rapid (III+) provide more of a technical challenge.',
        creekin: `http://cacreeks.com/truckee.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/322/`,
        flow: `https://www.dreamflows.com/graphs/day.165.php`,
        outfitters: [
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `39.419932%2C-120.031325`,
        lat: `39.419932`,
        long: `-120.031325`
    },
    {
        id: 'r6',
        name: 'Kaweah River, Upper',
        description: 'Continuous class IV rapids begin immediately at the Pumpkin Hollow Bridge put-in. Rapids continue all the way to take-out with few opportunities to relax.',
        creekin: `http://cacreeks.com/kaweah.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/212/`,
        flow: `https://www.dreamflows.com/graphs/day.103.php`,
        outfitters: [
            {link: `http://kaweah-whitewater.com/`, name: `Kaweah Whitewater Adventures`}],
        takeout: `36.438346%2C-118.906004`,
        lat: `36.438346`,
        long: `-118.906004`
    },
    {
        id: 'r7',
        name: 'Kaweah River, Lower',
        description: 'A family-friendly class III run. Put-in is in the town of Three Rivers and Holiday Falls Rapid (III+-IV) is often not run because of variable reservoir levels.',
        creekin: `http://cacreeks.com/kaweah.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/210/`,
        flow: `https://www.dreamflows.com/graphs/day.103.php`,
        outfitters: [
            {link: `http://kaweah-whitewater.com/`, name: `Kaweah Whitewater Adventures`}],
        takeout: `36.412747%2C-118.937156`,
        lat: `36.412747`,
        long: `-118.937156`
    },
    {
        id: 'r11',
        name: 'North Fork American River',
        description: 'A classic run beginning with several miles of class IV water before mellowing out in scenic class II. Chamberlain Falls (IV) and Bogus Thunder (IV), which merits a scout, are highlights.',
        creekin: `http://cacreeks.com/amer-nch.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/139`,
        flow: `https://www.dreamflows.com/graphs/day.069.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`},
            {link: `https://www.malode.com/`, name: `Mother Lode`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `39.000074%2C-120.939647`,
        lat: `39.000074`,
        long: `-120.939647`
    },
    {
        id: 'r12',
        name: 'Middle Fork American River',
        description: 'The first significant rapid, Tunnel Chute (IV+), runs through a man-made tunnel. A relaxing class II section in the middle before the Ruck-a-Chucky (VI) portage. The end of the run consists of a string of class IV rapids in quick succession.',
        creekin: `http://cacreeks.com/amer-mf1.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/136`,
        flow: `https://www.dreamflows.com/graphs/day.070.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`}, {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.malode.com/`, name: `Mother Lode`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `38.962018%2C-120.931663`,
        lat: `38.962018`,
        long: `-120.931663`
    },
    {
        id: 'r13',
        name: 'Tuolumne River',
        description: `The gem of this run is Clavey Falls (IV+/V-), but watch out for Ram's Head (IV+) and Lower India (IV-) at higher and lower flows, respectively. This run is often done as an overnight.`,
        creekin: `http://cacreeks.com/tuol-lum.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/326`,
        flow: `https://www.dreamflows.com/graphs/day.090.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`}, {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.oars.com/`, name: `OARS`},
            {link: `https://www.sierramac.com/`, name: `Sierra Mac`},
            {link: `http://zrafting.com`, name: `Zephyr`}],
        takeout: `37.876458%2C-120.295745`,
        lat: `37.876458`,
        long: `-120.295745`
    },
    {
        id: 'r14',
        name: 'Merced River',
        description: `A fantastic run for transitioning from class III to IV. Gravel Pit (IV) pops up in the first mile and Ned's Gulch (IV) will send you to take-out with a splash.`,
        creekin: `http://cacreeks.com/mercd140.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/246`,
        flow: `https://www.dreamflows.com/graphs/day.225.php`,
        outfitters: [
            {link: `https://www.arta.org/`, name: `ARTA`},
            {link: `https://www.sierramac.com/`, name: `Sierra Mac`},
            {link: `http://zrafting.com`, name: `Zephyr`}],
        takeout: `37.604730%2C-119.967481`,
        lat: `37.604730`,
        long: `-119.967481`
    },
    {
        id: 'r16',
        name: 'Cherry Creek',
        description: 'The most challenging, commercially-run class V stretch. Mushroom (V) and Toadstool (V) often stand out, but with 15 class V rapids the excitement never stops. Expect a swim test and two portages on commercial trips.',
        creekin: `http://cacreeks.com/tuol-up.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/325`,
        flow: `https://www.dreamflows.com/graphs/day.088.php`,
        outfitters: [
            {link: `https://www.aorafting.com/`, name: `All-Outdoors`},
            {link: `https://www.sierramac.com/`, name: `Sierra Mac`}],
        takeout: `37.835504%2C-120.055278`,
        lat: `37.835504`,
        long: `-120.055278`
    },
    {
        id: 'r17',
        name: 'North Fork Yuba River',
        description: 'A roadside run with several class IV rapids. The highlight is Maytag (V-), whose rating is bumped up because Son of Maytag (IV) is immediately downstream.',
        creekin: `http://cacreeks.com/yuba-nfg.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/340`,
        flow: `https://www.dreamflows.com/graphs/day.057.php`,
        outfitters: [
            {link: `https://raftcalifornia.com/`, name: `Raft California`}],
        takeout: `39.513355%2C-120.981418`,
        lat: `39.513355`,
        long: `-120.981418`
    },
    {
        id: 'r18',
        name: 'East Fork Carson River',
        description: 'A simple class II run. Sidewinder Rapid (III) provides some excitement with a short drop. The highlight of this two-day run are the hot springs on either side of the river which provide popular campsites.',
        creekin: `http://cacreeks.com/carson-e.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/162`,
        flow: `https://www.dreamflows.com/graphs/day.108.php`,
        outfitters: [
            {link: `https://raftcalifornia.com/`, name: `Raft California`}
        ],
        takeout: `38.868280%2C-119.692603`,
        lat: `38.868280`,
        long: `-119.692603`
    }
]