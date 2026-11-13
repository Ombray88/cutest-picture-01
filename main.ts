// A cutest-picture-01 entry (Node 22, standard library only): its picture is
// the entry.png beside this file, and the program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB
// and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// The picture in entry.png: a fluffy white baby kitten with enormous glossy
// sapphire-blue eyes, wearing a chunky knitted mint-green scarf and a daisy
// flower crown, gently hugging a tiny fluffy yellow chick with its eyes
// closed in a happy smile — two friends cuddling, the kitten's white paws
// with pink toe beans at the bottom, on a plain warm cream background, so
// it still reads at 300 pixels across. The file is a JPEG (190,975 bytes,
// 1024x1024), which the rules allow under the entry.png name.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Copy, never re-encode: the judge sees exactly the bytes in entry.png.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));

// A heartwarming scene of a white kitten cuddling a yellow chick in a mint-green scarf and daisy crown.
// JPEG file size: 190,975 bytes.
