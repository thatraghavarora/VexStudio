export const portfolioData = {
  'hollow-veil': {
    id: 'hollow-veil',
    title: 'Hollow Veil: Ascension of the Lost',
    badge: 'Experimental',
    tag: 'Souls-like RPG',
    focus: 'Vikhand Astra mechanics',
    description: 'An action RPG with complex combat mechanics engineered from scratch — stamina-based attacking, dodging mechanics, and challenging enemy AI using Blueprints.',
    image: '/images/hollow-veil-env-3.png',
    video: '/videos/hollow-veil.mp4',
    gddLink: '/gdds/GDD%20%E2%80%94%20Hollow%20Veil%20_%20Rishabh%20Chobey.pdf',
    info: [
      { label: 'Team Size', value: '1 (Solo)' },
      { label: 'Duration', value: 'Self-Taught Project' },
      { label: 'Engine', value: 'Unreal Engine 5' },
      { label: 'Genre', value: 'RPG / Souls-like' },
      { label: 'Tools', value: 'Blueprints' }
    ],
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'Hollow Veil is a challenging Souls-like RPG built from the ground up in Unreal Engine 5. Inspired by the Dark Souls franchise, this project pushed the boundaries of Blueprint scripting to create a deep, rewarding combat experience.'
      },
      {
        type: 'video-feature',
        title: 'Combat System',
        content: 'Engineered complex combat mechanics from scratch including a stamina-based system that governs attacking, blocking, and dodging. Every action costs stamina, forcing players to make strategic decisions during encounters.',
        video: '/videos/combat-preview.mp4'
      },
      {
        type: 'video-feature',
        title: 'Enemy AI',
        content: 'Created challenging enemy AI utilizing Unreal Engine Blueprints. Enemies feature varied attack patterns, patrol behaviors, and player detection systems that scale in difficulty throughout the game.',
        video: '/videos/enemy-ai.mp4'
      },
      {
        type: 'video-feature',
        title: 'Dodge Mechanics',
        content: 'Implemented precise dodge-roll mechanics with invincibility frames, giving players the ability to avoid damage through skillful timing — a key element of the Souls-like gameplay loop.',
        video: '/videos/dodge-mechanics.mp4'
      },
      {
        type: 'gallery',
        title: 'Environment & Level Design',
        content: 'Crafted dark, atmospheric environments that complement the souls-like gameplay — each area designed to challenge the player while telling a visual story.',
        images: [
          '/images/hollow-veil-env-1.png',
          '/images/hollow-veil-env-2.png',
          '/images/hollow-veil-env-4.png',
          '/images/hollow-veil-env-5.png',
          '/images/hollow-veil-env-6.png',
          '/images/hollow-veil-env-7.png',
          '/images/hollow-veil-env-8.png',
          '/images/hollow-veil-env-9.png'
        ]
      },
      {
        type: 'blueprints',
        title: 'Blueprint Logic',
        content: 'The combat, damage, and stealth systems were built entirely using Unreal Engine\'s Blueprint visual scripting.',
        items: [
          {
            image: '/images/hollow-veil-bp-1.png',
            title: 'Weapon Equip & Damage System',
            desc: 'Handles sword equip/unequip with socket attachment, montage playback, and a damage pipeline using Event AnyDamage with dodge-check immunity, health stat modification, hit react montage, walk speed reduction on hit, and VFX/SFX at impact location.'
          },
          {
            image: '/images/hollow-veil-bp-2.png',
            title: 'Die & Stealth Kill System',
            desc: 'Death logic disables movement and enables ragdoll physics. Stealth kill uses sphere overlap detection with actor tag filtering, casts to enemy blueprint, teleports player using Get World Location/Rotation, and plays a synchronized assassination montage.'
          },
          {
            image: '/images/hollow-veil-bp-3.png',
            title: 'Sword Attack Combo Montage',
            desc: 'A multi-hit SwordAttackCombo montage with timed BP_damage notifies for each swing, BP_SWING sound cues, NS_Trail Niagara particle effects for sword trails, and trail start/end markers for precise VFX timing.'
          }
        ]
      }
    ]
  },

  'the-good-son': {
    id: 'the-good-son',
    title: 'The Good Son',
    badge: 'Psychological Horror',
    tag: 'Psychological Horror',
    focus: 'PS1 Aesthetic & Anxiety Meter',
    description: 'A complete horror experience focusing on psychological tension with atmospheric lighting, narrative-driven events, and custom 3D assets modeled in Blender.',
    image: '/images/night-system.png',
    video: '/videos/good-son.mp4',
    gddLink: '/gdds/GDD%20%E2%80%94%20The%20Good%20Son%20_%20Rishabh%20Chobey.pdf',
    info: [
      { label: 'Team Size', value: '1 (Solo)' },
      { label: 'Duration', value: 'Self-Taught Project' },
      { label: 'Engine', value: 'Unreal Engine 5' },
      { label: 'Genre', value: 'Psychological Horror' },
      { label: 'Structure', value: 'Four-Day Narrative Arc' },
      { label: 'Tools', value: 'Blueprints, Blender' }
    ],
    sections: [
      {
        type: 'video-feature',
        title: 'Main Menu & Vibe',
        content: 'A psychological horror game built in UE5, structured as a four-day descent into a boy\'s fractured reality. Players navigate routine-based objectives while uncovering supernatural anomalies through environmental storytelling, an anxiety meter system, and internal monologue.',
        video: '/videos/main-menu.mp4'
      },
      {
        type: 'text',
        title: 'Narrative Structure: The Four-Day Descent',
        content: 'The game\'s narrative is segmented into "Days," using a routine-based structure to ground the player before introducing supernatural or psychological anomalies. Each day expands the boy\'s world — from his bedroom to the forbidden areas of the house.'
      },
      {
        type: 'bullets',
        title: 'Internal Monologue & "Self-Talking"',
        content: 'The primary narrative voice is the protagonist\'s internal dialogue.',
        items: [
          { title: 'Self-Reflection', desc: 'The boy frequently engages in "self-talking," expressing his regrets, cursing his situation, or mourning the loss of his father.' },
          { title: 'Direct Player Introduction', desc: 'Early on, the protagonist explicitly introduces his "anxiety problem" to the player, establishing a meta-connection between his mental state and the game\'s mechanics.' },
          { title: 'Contrasting Realities', desc: 'The narrative opens with a "Happy Child" dream sequence to provide a stark contrast to the grim reality the boy wakes up to.' }
        ]
      },
      {
        type: 'bullets',
        title: 'Objective-Based Storytelling',
        content: 'Story progression is tied to "Daily Objectives" that mirror the chores of a "Good Son."',
        items: [
          { title: 'The Mundane Loop', desc: 'Tasks like cleaning garbage, turning off lights, and getting food represent the boy\'s attempt to maintain order.' },
          { title: 'Environmental Storytelling', desc: 'While performing these tasks, the player discovers narrative "clues" hinting at a darker subtext — voodoo dolls, abnormal bones, and blood-written script on the walls.' }
        ]
      },
      {
        type: 'video-feature',
        title: 'The Anxiety Meter as a Narrative Lens',
        content: 'The "Anxiety Meter" (represented in-game as a thermometer) serves as more than just a mechanic — it is a narrative tool. As the boy finds or loses his anxiety meter, his self-talk changes, reflecting his fluctuating courage and mental stability.',
        video: '/videos/anxiety-meter.mp4'
      },
      {
        type: 'bullets',
        title: 'Mystery & Escalation',
        content: 'The narrative builds tension by slowly expanding the boy\'s world from his bedroom to the forbidden areas of the house.',
        items: [
          { title: 'Forbidden Thresholds', desc: 'The story escalates when the boy breaks into his mother\'s room at midnight, discovering "paranormal activities" and a torn note.' },
          { title: 'The Basement Hook', desc: 'The narration culminates in the discovery of a basement where "something bad is happening," shifting the tone from domestic struggle to an investigation of the unknown.' }
        ]
      },
      {
        type: 'image-feature',
        title: 'Night System Architecture',
        content: 'A modular Night System drives the game\'s day-night cycle and creates escalating tension through timed events and survival mechanics.',
        image: '/images/night-system.png',
        bullets: [
          { title: 'BP_NightManager', desc: 'The core blueprint that orchestrates the entire night cycle — controls transitions, spawning, and event sequencing across each day.' },
          { title: 'DT_NightConfigs', desc: 'Data Table storing configurable parameters for each night (duration, difficulty, spawns), allowing easy balancing without touching code.' },
          { title: 'BP_GarbageSpawnPoint', desc: 'Dynamically spawns garbage objects the player must clean as part of their daily objectives.' },
          { title: 'WBP_MotherTimer', desc: 'A widget blueprint displaying the countdown timer until the mother returns — adding urgency and pressure.' }
        ]
      },
      {
        type: 'table',
        title: 'Narrative Key Elements',
        headers: ['Element', 'Purpose'],
        rows: [
          ['The Father', 'A source of grief and a primary driver for the boy\'s "self-talking" reflections.'],
          ['The Mother/Stepmother', 'The primary antagonist force who dictates tasks and enforces boundaries through scolding.'],
          ['Environmental Clues', 'Items like a painting of the father or a fixed note that provide backstory without explicit dialogue.']
        ]
      },
      {
        type: 'gallery',
        title: 'Custom 3D Assets (Blender)',
        content: 'All 3D assets and environment props were designed, modeled, and integrated using Blender. This hands-on approach ensured complete creative control over the game\'s visual identity.',
        images: [
          '/images/3d-asset-1.png',
          '/images/3d-asset-2.png',
          '/images/3d-asset-3.png',
          '/images/3d-asset-4.png',
          '/images/3d-asset-5.png'
        ]
      },
      {
        type: 'blueprints',
        title: 'Blueprint Logic',
        content: 'Complex interactive systems were built using Unreal Engine\'s Blueprint visual scripting, including event triggers, environmental interactions, and narrative progression mechanics.',
        items: [
          {
            image: '/images/blueprint-1.png',
            title: 'Event-Driven Gameplay System',
            desc: 'Handles interaction events, timer-based triggers, food percentage mechanics, and player controller setup with ignore-input logic for cutscene sequences.'
          },
          {
            image: '/images/blueprint-2.png',
            title: 'Anxiety & Fear System',
            desc: 'Event Tick-driven anxiety level with slow movement speed, camera shake effects, hiding mechanics that decrease anxiety, and dynamic heartbeat sound + death triggers at max fear.'
          },
          {
            image: '/images/blueprint-3.png',
            title: 'Inspect & Puzzle System',
            desc: 'Flashlight/Unarmed inspect with montage playback, toy parts collection puzzle using Switch logic (Head, Leg, Hand) with AND condition check, and actor look-at-player rotation using timeline-driven interpolation.'
          }
        ]
      }
    ]
  },

  'andhkaar': {
    id: 'andhkaar',
    title: 'Andhakaar',
    badge: 'Under Development',
    tag: 'Horror Puzzle Game',
    focus: 'Atmosphere & Mechanics',
    description: 'A horror puzzle game featuring intricate puzzle mechanics, inventory systems, suspenseful level design, and immersive problem-solving gameplay.',
    image: '/images/andhkaar-splash-1.png',
    video: '/videos/andhkaar.mp4',
    gddLink: '/gdds/GDD%20%E2%80%94%20Andhkaar%20_%20Rishabh%20Chobey.pdf',
    info: [
      { label: 'Team Size', value: '1 (Solo)' },
      { label: 'Duration', value: 'Currently In Development' },
      { label: 'Engine', value: 'Unreal Engine 5' },
      { label: 'Genre', value: 'Horror / Puzzle' },
      { label: 'Tools', value: 'Blueprints, Blender' }
    ],
    sections: [
      {
        type: 'text',
        title: 'Introduction',
        content: 'Andhakaar is a horror puzzle game that combines atmospheric horror with intricate puzzle-solving gameplay. Built entirely in Unreal Engine 5, the game challenges players to think critically while navigating a suspenseful environment.'
      },
      {
        type: 'bullets',
        title: 'Core Systems',
        content: 'Designed from the ground up to emphasize atmosphere and interaction:',
        items: [
          { title: 'Puzzle Mechanics', desc: 'Designed and scripted complex puzzle mechanics that require players to observe their environment, collect items, and combine solutions in creative ways.' },
          { title: 'Inventory System', desc: 'Implemented a full inventory management system allowing players to collect, examine, and use items throughout the game. Supports item combinations and contextual interactions.' }
        ]
      },
      {
        type: 'video-feature',
        title: 'Level Design & Enemy Encounters',
        content: 'Prioritized suspenseful level design with carefully crafted spaces that guide the player while maintaining a sense of dread. The environment also supports terrifying enemy encounters designed to test the player\'s spatial awareness.',
        video: '/videos/andhkaar-enemy.mp4'
      },
      {
        type: 'image-feature',
        title: 'Material Logic',
        content: 'Created custom, dynamic materials like the emissive logic for the interactive "shining balls" used throughout the game to guide or puzzle the player.',
        image: '/images/andhkaar-splash-2.png',
        bullets: [
          { title: 'Emissive Material Logic', desc: 'Custom material setup controlling the pulse, glow intensity, and color parameters for the shining light orbs.' }
        ]
      },
      {
        type: 'gallery',
        title: 'Splash Balls Blueprint Logic',
        content: 'Implemented a dynamic "Splash Ball" system where players can throw projectiles that dynamically paint the environment. This system utilizes a combination of projectile movement, hit surface detection, and dynamic material instancing to render paint splatters precisely where the ball impacts the geometry.',
        images: [
          '/images/andhkaar-splash-1.png',
          '/images/andhkaar-splash-2.png',
          '/images/andhkaar-splash-3.png'
        ]
      }
    ]
  }
};
