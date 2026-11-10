---
title: SSL ORIGIN – Basic Setup & Troubleshooting
description: A practical guide to tracking, monitoring and fixing common problems on the Solid State Logic ORIGIN analogue console.
---

# SSL ORIGIN: Basic Setup & Troubleshooting

A practical, student-level guide to getting sound into Pro Tools and back out of the speakers on the **Solid State Logic ORIGIN** (32- or 16-channel) analogue in-line console, plus fixes for the problems you are most likely to hit in a session.

::: info About this guide
These are unofficial study notes written while learning the console. Every console behaviour described here comes from the **SSL ORIGIN User Guide V2.0 (October 2022)**. Anything that depends on how a particular studio is wired (patchbay layout, which interface inputs are used) is marked as studio-specific. Always check with the studio manager before re-patching.
:::

## 1. How the console thinks

### Two paths in every channel

ORIGIN is an **in-line** console. Each channel strip contains two independent signal paths that run side by side:

| Path | Fader | Default input | Typical job |
|---|---|---|---|
| **SF** (Small Fader path) | 60 mm fader | **CHAN** input (mic pre / line) | Recording: mic → Pro Tools |
| **LF** (Large Fader path) | 100 mm fader | **MON** input (line level from the DAW) | Listening: Pro Tools → speakers / mix bus |

So a single channel strip can send a microphone to Pro Tools **and** play the recorded track back to you at the same time. You do not need two channels for one source.

::: tip Different from older SSLs
On many classic SSL desks the large fader is the record path. On ORIGIN the default is the opposite: **CHAN → small fader** for recording, **MON → large fader** for monitoring. If you learned on another console, flip your mental picture.
:::

### Red and green LEDs tell you where things are

Most sections of the channel strip (input, HPF, EQ, inserts, bus routing, Direct Out) have their own **PATH FLIP** switch and a pair of LEDs:

- **Red LED = Small Fader (SF) path**
- **Green LED = Large Fader (LF) path**

A PATH FLIP switch only moves *that one section* to the other path. Both paths keep passing audio. For example, flipping the EQ to LF does not stop the SF path working; it just means the SF signal is no longer EQ'd.

Signal flow for a typical recording channel:

```
Mic → CHAN gain → SF path → Direct Out → Pro Tools (record)
Pro Tools output → MON input → LF path → LF TO MIX → mix bus → monitors
```

## 2. Before you start

1. **Wake the console.** ORIGIN has a sleep mode. If the **WAKE/SLEEP** LED is slowly pulsing (about once per second) the console is asleep; press **WAKE/SLEEP** once to wake it. Holding the switch for about 3 seconds puts it back to sleep.
2. **Check Auto Sleep.** If **AUTO SLEEP** is on, the console goes to sleep after a period with no meter or switch activity (factory default: 20 minutes). The WAKE/SLEEP LED flashes quickly for roughly the last minute as a warning.
3. **Zero the desk.** Start from a known state: faders down, sends off, EQ/HPF out, no stray CUT or SOLO switches, nothing routed to buses you are not using.
4. **Scan the LEDs.** Run your eye across the red/green path LEDs on every channel you will use. Anything that is on the wrong path will cause trouble later.

::: warning Monitors and power
When ORIGIN sleeps or wakes it runs a controlled power sequence and disconnects the monitor outputs first, so speakers left on are protected from thumps. Other equipment in the studio may not be so forgiving, so follow your studio's own power-up order.
:::

## 3. Setup: recording a microphone

Use one channel strip per microphone.

1. **Patch the mic.** Plug it into the channel's mic input (usually via the studio's patchbay or wall box). *Studio-specific.*
2. **Select the input.** Leave **LINE** off to use the mic (XLR) input. Press **LINE** only for line-level sources.
3. **Phantom power.** Press **48V** for condenser microphones. Leave it off for dynamic mics and, as a general precaution, ribbon mics.
4. **Set the gain.** Turn **GAIN** while the performer plays at full level and watch the **CHAN** input meter above the channel. Mic gain ranges from roughly +2 dB to +70 dB.
5. **Optional: DRIVE.** With **DRIVE** off, the preamp is very clean. With DRIVE on, the preamp adds harmonic colour and some transient softening that increases with gain. Decide before you record; it will be printed.
6. **Keep the input on SF.** Do *not* press the input **PATH FLIP**. CHAN should feed the small fader (red LED).
7. **Send to Pro Tools with Direct Out.** Direct Out takes its signal from the SF path by default. Patch each channel's Direct Out to the matching Pro Tools interface input. *Studio-specific.*
8. **Protect the record level.** Direct Out is **post fader** by default, so moving the small fader changes what gets recorded. Either:
   - press the small fader **0dB** switch, which bypasses the fader and fixes the path at unity gain, or
   - press **PRE** in the Direct Out section to take the signal before the fader.
9. **Decide on HPF and EQ.** Each has its own **IN** switch and PATH FLIP:
   - on **SF (red)**: it changes what is recorded. This cannot be undone later.
   - on **LF (green)**: it only changes what you hear. The recording stays clean.
10. **Arm the track in Pro Tools** and check the level arriving there as well as on the console meter.

::: tip Beginner-safe default
HPF on SF only if you are sure (e.g. removing stand rumble). EQ on LF so you can shape the monitor sound without committing.
:::

## 4. Setup: monitoring the DAW return

1. **Patch the return.** Patch the Pro Tools output for that track to the **MON** input of the *same* channel. *Studio-specific.*
2. **Adjust TRIM.** The MON input sits at unity gain by default. The **TRIM** knob gives ±20 dB to correct a return that is too hot or too quiet.
3. **Send LF to the mix.** Press **LF TO MIX** so the large fader feeds the main stereo mix bus.
4. **Set the monitor source.** In the master section, **MON SOURCE** should be on **MIX** (the default). Select your speakers in **MON SELECT** (MAIN, ALT MON 1 or ALT MON 2) and bring up **MONITOR LEVEL**.
5. **Turn on input monitoring in Pro Tools** for record-armed tracks. Otherwise the MON input only receives audio during playback.

## 5. Setup: headphone (cue) mix for the performer

1. **Per channel:** turn up **CUE A** (and pan it) on every channel the performer should hear. By default Cue A/B come from the **LF path, pre fader**, so the headphone mix follows your monitor balance but is not affected when you move the large faders.
2. **Optional: SF source.** Press **SF** in the Cue section to feed the cue from the small fader path instead (the live signal before it reaches Pro Tools).
3. **Cue master:** in **CUES AND AUX MASTERS**, raise the **STEREO CUE A** master level. Use its **AFL** switch to listen to the cue mix yourself.
4. **Route to the headphones:** in the **COMMUNICATIONS** section, press **STEREO CUE A** in the **FOLDBACK A** column and raise the FOLDBACK A level. Foldback A/B normally feed the artist headphone system. *Studio-specific.*
5. **Talkback:** press **TALK** above the FOLDBACK A column to talk to the performer. A short press latches it on; press and hold for momentary talk.

### Adding a click track

The click usually only needs to be heard, not recorded:

1. Send the Pro Tools click to a spare output.
2. Patch it to the **MON** input of an unused channel (LF path).
3. Use that channel's **CUE A** send to add the click to the headphone mix. Leave **LF TO MIX** off if you do not want it in the control room.

## 6. Quick reference

| Control | Where | What it does |
|---|---|---|
| LINE | Channel input | Switches CHAN from mic (XLR) to line input |
| 48V | Channel input | Phantom power for the mic input |
| DRIVE | Channel input | Adds harmonic colour to the preamp |
| PATH FLIP | Each section | Moves that section between SF (red) and LF (green) |
| TRIM | MON input | ±20 dB adjustment for line returns |
| Direct Out PRE | Direct Out | Takes Direct Out before the fader |
| 0dB | SF / LF fader | Bypasses the fader at unity gain |
| SF FROM LF | Small fader | Feeds the small fader from the large fader (parallel mixes) |
| LF TO MIX / SF TO MIX | Fader sections | Sends that path to the main mix bus |
| IN FRONT BALANCE | Solo master | Balance between solo (AFL) and the mix in the monitors |
| SHIFT / CLEAR ROUTE | Misc section | Escapes routing mode or clears routes |

## 7. Troubleshooting

### No sound on the channel meter (CHAN)

- **Wrong input selected.** If **LINE** is pressed, the mic input is ignored.
- **Condenser mic, no phantom power.** Press **48V**.
- **Gain too low.** Raise **GAIN** while the source is playing.
- **Patching.** Check the mic cable and the patchbay route to that channel. *Studio-specific.*
- **Console asleep.** If the WAKE/SLEEP LED is pulsing, press WAKE/SLEEP.

### The meter moves but Pro Tools receives nothing (or very little)

- **Small fader is down.** Direct Out is post fader by default. Press **0dB** on the small fader or **PRE** on the Direct Out.
- **Small fader CUT is on.** Release **CUT** on the SF section.
- **Direct Out has been flipped to LF.** Check the Direct Out LEDs; red (SF) is the default.
- **Patching / interface input.** Confirm the Direct Out is patched to the correct Pro Tools input and that the track's input is set to it. *Studio-specific.*

### A test tone or talkback appears on the recording

- **Oscillator to buses or mix.** The oscillator's **TO BUSES** and **TO MIX** switches *replace* whatever is on those outputs. Switch them off while recording from the bus or mix outputs.
- **SLATE was pressed.** SLATE puts the talkback mic on all 16 bus outputs and the mix output (and cuts the main monitors) for as long as it is held.

### EQ changes the recording when I only wanted it on the monitors (or the reverse)

The EQ and HPF are on the wrong path. Check their LEDs: **red = SF (recorded)**, **green = LF (monitor only)**, and use their **PATH FLIP** switches. Also check the **IN** switch for each.

### No sound in the control room

Work through this list in order:

1. **LF TO MIX** is off on the channels you expect to hear.
2. **MON SOURCE** is set to an external source instead of **MIX**.
3. **CUT** or **DIM** is active in the monitor section, or **MUTE L/MUTE R** is pressed.
4. The wrong speakers are selected in **MON SELECT**, or **MONITOR LEVEL** is down.
5. Pro Tools is not playing and **input monitoring** is off, so the MON inputs receive nothing.
6. The MON **TRIM** is turned right down.

### The performer can't hear anything in the headphones

- The channel **CUE A** sends are down, or the cue is panned unexpectedly.
- The **STEREO CUE A** master level in CUES AND AUX MASTERS is down.
- **STEREO CUE A** is not selected in the **FOLDBACK A** column, or the FOLDBACK A level is down.
- The cue is taken from the path that has no signal (e.g. Cue set to SF but the source is on LF). Check the Cue **SF** switch.
- The headphone amp or wall box is not patched or turned on. *Studio-specific.*

### Solo doesn't seem to do anything

- **IN FRONT BALANCE** is turned fully clockwise, so you only hear the mix and none of the solo signal. Turn it back.
- **SOLO LEVEL** is turned down.
- Check the yellow **SOLO ACTIVE** LED; press **SOLO CLEAR** to reset all solos.

### Soloing a channel cuts other channels that are recording

**SF SIP** (Solo In Place) is on for the small faders. Solo In Place is destructive: it mutes everything else on that path, including other record sends. Turn **SF SIP** off so the small faders use non-destructive AFL solo while tracking.

### The control room monitors drop in level whenever I talk

This is expected: by default, pressing **TALK** also **DIM**s the monitors. To change it, hold **TALK** and press **DIM** to link or unlink the two. The console remembers the setting.

### Feedback (howl) when using talkback with the listen mic

**SEND LISTEN TO TALKBACK** feeds the listen mic into the talkback system. If the listen mic is in the same room as the studio loudspeakers or open-back headphones, this can create a feedback loop. Turn the feature off or lower the STUDIO output.

### The OVERLOAD LED lights up

The channel is within about 3 dB of clipping on one of its paths. Reduce **GAIN**, reduce large EQ boosts, or check whether **DRIVE** is pushing the level. Also check the MON **TRIM** if the overload is on the LF path.

### I don't know what is routed where

- Press a channel's **ROUTE** switch: the bus LEDs in the centre section light up to show where that channel goes. Press it again to exit.
- Press a **bus** switch in BUS TRIM MASTERS AND ROUTING: the channel ROUTE LEDs show what feeds that bus.
- To clear one channel's routes, hold **SHIFT** and press its **ROUTE** switch.
- To clear **all** bus routing, hold **SHIFT** and press bus switches **1** and **16** together.

### The console is in a strange state left by the previous user

A **factory reset** clears all routing, communications settings, Auto Sleep and monitor selections:

1. Power up the console (from off or from sleep).
2. Hold **PEAK MODE SELECT** and **DIM MON METERS** during the meter start-up sequence.
3. When the red peak LEDs flash on every meter, release the switches. The console restarts with factory settings.

::: danger Ask first
In a shared or teaching studio, ask the studio manager before doing a factory reset. Other users may rely on the saved settings.
:::

## 8. Sources

- Solid State Logic, *ORIGIN User Guide*, Revision V2.0, October 2022. Available from the ORIGIN documents section of [solidstatelogic.com](https://www.solidstatelogic.com/).
- Patchbay and wiring details vary between studios. See Appendix F of the user guide for SSL's suggested patchbay layouts, and your studio's own documentation.
