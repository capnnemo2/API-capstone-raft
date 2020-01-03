const riverDescrip = [
    {
        id: 'r1',
        name: 'American River, Sacramento',
        description: `This section runs all year. There are multiple access areas, but a popular varition is using Sunrise Blvd to Watt Ave for put-in and take-out. It is predominantly class I with San Juan Rapids, a popular playboating location being the sole class II.`,
        creekin: `http://cacreeks.com/amer-low.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/4538`,
        flow: `https://www.dreamflows.com/graphs/day.076.php`,
        outfitters: `There are no outfitters for this run.`,
        takeout: `38.566566,-121.383601`,
        lat: `38.566566`,
        long: `-121.38360`
    },
    {
        id: 'r2',
        name: 'South Fork of the American River, Coloma to Greenwood',
        description: 'Dependable flows through Spring and Summer, weekend flows all year. Put-in at Marshall Gold Discovery State Park, take-out at Greenwood Creek. Class I and II rapids are interspersed with calm, scenic stretches. The last rapid on the run, Highway Rapid (II+), is the longest and one of the most challenging rapids.',
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/5117`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [`https://www.aorafting.com/, https://www.malode.com/, https://www.oars.com/, https://whitewatertours.com/`],
        takeout: `38.826396,-120.949185`,
        lat: `38.826396`,
        long: `-120.949185`
    },
    {
        id: 'r3',
        name: 'South Fork of the American River, Upper',
        description: 'Dependable flows through Spring and Summer, weekend flows all year. Meatgrinder Rapid (III) gets your heart pumping immediately and Troublemaker (III)sends you into Marshall Gold Discovery State Park. Because of those two rapids, this run is considered slightly more challenging than the SFA, Lower run.',
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/148`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [`https://www.aorafting.com/, https://www.malode.com/, https://www.oars.com/, https://whitewatertours.com/`],
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r4',
        name: 'South Fork of the American River, Lower',
        description: `Dependable flows through Spring and Summer, weekend flows all year. Considered slightly less challenging than the SFA, Upper run. Notable rapids inclue Fowler's Rock (III), Satan's Cesspool (III), and Hospital Bar (III).`,
        creekin: `http://cacreeks.com/amer-sf.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/4068`,
        flow: `https://www.dreamflows.com/graphs/day.075.php`,
        outfitters: [`https://www.aorafting.com/, https://www.malode.com/, https://www.oars.com/, https://whitewatertours.com/`],
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r5',
        name: 'Truckee River',
        description: 'You can put-in on the Little Truckee or at Boca Bridge. Plenty of class II rapids until the end of the run where Jaws Rapid (III) and Bronco Rapid (III+) provide more of a technical challenge.',
        creekin: `http://cacreeks.com/truckee.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/322/`,
        flow: `https://www.dreamflows.com/graphs/day.165.php`,
        outfitters: `https://whitewatertours.com/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r6',
        name: 'Kaweah River, Upper',
        description: 'Continuous class IV rapids begin immediately at the Pumpkin Hollow Bridge put-in. Rapids continue all the way to take-out with few opportunities to relax.',
        creekin: `http://cacreeks.com/kaweah.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/212/`,
        flow: `https://www.dreamflows.com/graphs/day.103.php`,
        outfitters: `http://kaweah-whitewater.com/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r7',
        name: 'Kaweah River, Lower',
        description: 'A family-friendly class III run. Put-in is in the town of Three Rivers and Holiday Falls Rapid (III+-IV) is often not run because of variable reservoir levels.',
        creekin: `http://cacreeks.com/kaweah.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/210/`,
        flow: `https://www.dreamflows.com/graphs/day.103.php`,
        outfitters: `http://kaweah-whitewater.com/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r8',
        name: 'Kern River, Upper',
        description: 'There are multiple different sections that can be run, depending on flows. At lower flows, the Limestone run offers the best class IV water.',
        creekin: `http://cacreeks.com/kern-nf.htm`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `http://www.whitewatervoyages.com/kern-river-rafting/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r9',
        name: 'Kern River, Lower',
        description: 'This is a description of the river',
        creekin: `This is a link to dreamflows description of the run`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `http://www.whitewatervoyages.com/kern-river-rafting/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r10',
        name: 'Kern River, Forks of the Kern',
        description: 'Granite slab canyon within Sequoia National Forest. Put-in access is via a three mile Forest Service trail. Pack animals are normally utilized to move gear for this run that is typically done in 2-3 days.',
        creekin: `http://cacreeks.com/kern-fks.htm`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `http://www.whitewatervoyages.com/kern-river-rafting/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r11',
        name: 'North Fork of the American River',
        description: 'A classic run beginning with several miles of class IV water before mellowing out in scenic class II. Chamberlain Falls (IV) and Bogus Thunder (IV), which merits a scout, are highlights.',
        creekin: `http://cacreeks.com/amer-nch.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/139`,
        flow: `https://www.dreamflows.com/graphs/day.069.php`,
        outfitters: [`https://www.aorafting.com/, https://www.malode.com/, https://www.oars.com/, https://whitewatertours.com/`],
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r12',
        name: 'Middle Fork of the American River',
        description: 'The first significant rapid, Tunnel Chute (IV+), runs through a man-made tunnel. A relaxing class II section in the middle before the Ruck-a-Chucky (VI) portage. The end of the run consists of a string of class IV rapids in quick succession.',
        creekin: `http://cacreeks.com/amer-mf1.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/136`,
        flow: `https://www.dreamflows.com/graphs/day.070.php`,
        outfitters: [`https://www.aorafting.com/, https://www.malode.com/, https://www.oars.com/, https://whitewatertours.com/`],
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r13',
        name: 'Tuolumne River',
        description: 'This is a description of the river',
        creekin: `This is a link to dreamflows description of the run`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `There are no outfitters for this run because it is just a float.`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r14',
        name: 'Merced River',
        description: 'This is a description of the river',
        creekin: `This is a link to dreamflows description of the run`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `There are no outfitters for this run because it is just a float.`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r15',
        name: 'California Salmon River',
        description: 'This is a description of the river',
        creekin: `This is a link to dreamflows description of the run`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `There are no outfitters for this run because it is just a float.`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r16',
        name: 'Cherry Creek',
        description: 'This is a description of the river',
        creekin: `This is a link to dreamflows description of the run`,
        awa: `This is a link to american whitewater`,
        flow: `This is a link to dreamflows current flow`,
        outfitters: `There are no outfitters for this run because it is just a float.`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r17',
        name: 'North Fork of the Yuba River',
        description: 'A roadside run with several class IV rapids. The highlight is Maytag (V-), whose rating is bumped up because Son of Maytag (IV) is immediately downstream.',
        creekin: `http://cacreeks.com/yuba-nfg.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/340`,
        flow: `https://www.dreamflows.com/graphs/day.057.php`,
        outfitters: `https://whitewatertours.com/`,
        takeout: `This is the lat/long of the take-out`
    },
    {
        id: 'r18',
        name: 'East Fork of the Carson River',
        description: 'A simple class II run. Sidewinder Rapid (III) provides some excitement with a short drop. The highlight of this two-day run are the hot springs on either side of the river which provide popular campsites.',
        creekin: `http://cacreeks.com/carson-e.htm`,
        awa: `https://www.americanwhitewater.org/content/River/detail/id/162`,
        flow: `https://www.dreamflows.com/graphs/day.108.php`,
        outfitters: `There are no outfitters for this run.`,
        takeout: `This is the lat/long of the take-out`
    }
]