import * as ms from '../process/move';

export const MoveOpcode = [
    { opcode: 0x00, command: "END", callback: ms.END, offset: 0 },
    { opcode: 0x01, command: "NOP", callback: ms.NOP, offset: 0 },
    { opcode: 0x02, command: "BODY", callback: ms.BODY, offset: 1, args: ['Int8'] },
    { opcode: 0x03, command: "ANIM", callback: ms.ANIM, offset: 2, args: ['Int8', 'Uint8'] },
    { opcode: 0x04, command: "GOTO_POINT", callback: ms.GOTO_POINT, offset: 1, args: ['Uint8'] },
    { opcode: 0x05, command: "WAIT_ANIM", callback: ms.WAIT_ANIM, offset: 0 },
    { opcode: 0x06, command: "LOOP", callback: ms.NOP, offset: 0 },
    { opcode: 0x07, command: "ANGLE", callback: ms.ANGLE, offset: 2, args: ['Int16'] },
    { opcode: 0x08, command: "POS_POINT", callback: ms.POS_POINT, offset: 1, args: ['Uint8'] },
    { opcode: 0x09, command: "LABEL", callback: ms.LABEL, offset: 1, args: ['Uint8'] },
    { opcode: 0x0A, command: "GOTO", callback: ms.GOTO, offset: 2, args: ['Int16'] },
    { opcode: 0x0B, command: "STOP", callback: ms.STOP, offset: 0 },
    { opcode: 0x0C, command: "GOTO_SYM_POINT", callback: ms.GOTO_SYM_POINT, offset: 1, args: ['Uint8'] },
    { opcode: 0x0D, command: "WAIT_NUM_ANIM", callback: ms.WAIT_NUM_ANIM, offset: 1, args: ['Uint8'] },
    { opcode: 0x0E, command: "SAMPLE", callback: ms.SAMPLE, offset: 2, args: ['Uint16'] },
    { opcode: 0x0F, command: "GOTO_POINT_3D", callback: ms.GOTO_POINT_3D, offset: 1, args: ['Uint8'] },
    { opcode: 0x10, command: "SPEED", callback: ms.SPEED, offset: 2, args: ['Uint16'] },
    { opcode: 0x11, command: "BACKGROUND", callback: ms.BACKGROUND, offset: 1, args: ['Uint8'] },
    { opcode: 0x12, command: "WAIT_NUM_SECOND", callback: ms.WAIT_NUM_SECOND, offset: 5, args: ['Uint8', 'Uint32'] },
    { opcode: 0x13, command: "NO_BODY", callback: ms.NO_BODY, offset: 0 },
    { opcode: 0x14, command: "BETA", callback: ms.BETA, offset: 2, args: ['Int16'] },
    { opcode: 0x15, command: "OPEN_LEFT", callback: ms.OPEN_LEFT, offset: 2, args: ['Int16'] },
    { opcode: 0x16, command: "OPEN_RIGHT", callback: ms.OPEN_RIGHT, offset: 2, args: ['Int16'] },
    { opcode: 0x17, command: "OPEN_UP", callback: ms.OPEN_UP, offset: 2, args: ['Int16'] },
    { opcode: 0x18, command: "OPEN_DOWN", callback: ms.OPEN_DOWN, offset: 2, args: ['Int16'] },
    { opcode: 0x19, command: "CLOSE", callback: ms.CLOSE, offset: 0 },
    { opcode: 0x1A, command: "WAIT_DOOR", callback: ms.WAIT_DOOR, offset: 0 },
    { opcode: 0x1B, command: "SAMPLE_RND", callback: ms.SAMPLE_RND, offset: 2, args: ['Int16'] },
    { opcode: 0x1C, command: "SAMPLE_ALWAYS", callback: ms.SAMPLE_ALWAYS, offset: 2, args: ['Int16'] },
    { opcode: 0x1D, command: "SAMPLE_STOP", callback: ms.SAMPLE_STOP, offset: 2, args: ['Int16'] },
    { opcode: 0x1E, command: "PLAY_ACF", callback: ms.PLAY_ACF, offset: 0 },
    { opcode: 0x1F, command: "REPEAT_SAMPLE", callback: ms.REPEAT_SAMPLE, offset: 2, args: ['Int16'] },
    { opcode: 0x20, command: "SIMPLE_SAMPLE", callback: ms.SIMPLE_SAMPLE, offset: 2, args: ['Int16'] },
    { opcode: 0x21, command: "FACE_HERO", callback: ms.FACE_HERO, offset: 2, args: ['Uint16'] },
    { opcode: 0x22, command: "ANGLE_RND", callback: ms.ANGLE_RND, offset: 4, args: ['Int16', 'Uint16'] },
    { opcode: 0x23, command: "REPLACE", callback: ms.REPLACE, offset: 0 },
    { opcode: 0x24, command: "WAIT_NUM_DSEC", callback: ms.WAIT_NUM_DSEC, offset: 5, args: ['Uint8', 'Uint32'] },
    { opcode: 0x25, command: "DO", callback: ms.NOP, offset: 0 },
    { opcode: 0x26, command: "SPRITE", callback: ms.SPRITE, offset: 2, args: ['Int16'] },
    { opcode: 0x27, command: "WAIT_NUM_SECOND_RND", callback: ms.WAIT_NUM_SECOND_RND, offset: 5, args: ['Uint8', 'Uint32'] },
    { opcode: 0x28, command: "AFF_TIMER", callback: ms.NOP, offset: 0 },
    { opcode: 0x29, command: "SET_FRAME", callback: ms.SET_FRAME, offset: 1, args: ['Uint8'] },
    { opcode: 0x2A, command: "SET_FRAME_3DS", callback: ms.SET_FRAME_3DS, offset: 1, args: ['Uint8'] },
    { opcode: 0x2B, command: "SET_START_3DS", callback: ms.SET_START_3DS, offset: 1, args: ['Uint8'] },
    { opcode: 0x2C, command: "SET_END_3DS", callback: ms.SET_END_3DS, offset: 1, args: ['Uint8'] },
    { opcode: 0x2D, command: "START_ANIM_3DS", callback: ms.START_ANIM_3DS, offset: 1, args: ['Uint8'] },
    { opcode: 0x2E, command: "STOP_ANIM_3DS", callback: ms.STOP_ANIM_3DS, offset: 0 },
    { opcode: 0x2F, command: "WAIT_ANIM_3DS", callback: ms.WAIT_ANIM_3DS, offset: 0 },
    { opcode: 0x30, command: "WAIT_FRAME_3DS", callback: ms.WAIT_FRAME_3DS, offset: 0 },
    { opcode: 0x31, command: "WAIT_NUM_DECIMAL_RND", callback: ms.WAIT_NUM_DECIMAL_RND, offset: 5, args: ['Uint8', 'Uint32'] },
    { opcode: 0x32, command: "INTERVAL", callback: ms.INTERVAL, offset: 2, args: ['Uint16'] },
    { opcode: 0x33, command: "FREQUENCY", callback: ms.FREQUENCY, offset: 2, args: ['Uint16'] },
    { opcode: 0x34, command: "VOLUME", callback: ms.VOLUME, offset: 1, args: ['Uint8'] }
];

