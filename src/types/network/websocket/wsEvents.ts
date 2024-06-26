/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { WsConversationEvent } from './wsConversationEvents';
import { WsMeetingEvent } from './wsMeetingEvents';

export enum WsEventType {
	INITIALIZATION = 'websocketConnected',
	PONG = 'pong',
	ROOM_CREATED = 'ROOM_CREATED',
	ROOM_UPDATED = 'ROOM_UPDATED',
	ROOM_DELETED = 'ROOM_DELETED',
	ROOM_OWNER_PROMOTED = 'ROOM_OWNER_PROMOTED',
	ROOM_OWNER_DEMOTED = 'ROOM_OWNER_DEMOTED',
	ROOM_PICTURE_CHANGED = 'ROOM_PICTURE_CHANGED',
	ROOM_PICTURE_DELETED = 'ROOM_PICTURE_DELETED',
	ROOM_MEMBER_ADDED = 'ROOM_MEMBER_ADDED',
	ROOM_MEMBER_REMOVED = 'ROOM_MEMBER_REMOVED',
	ROOM_MUTED = 'ROOM_MUTED',
	ROOM_UNMUTED = 'ROOM_UNMUTED',
	USER_PICTURE_CHANGED = 'USER_PICTURE_CHANGED',
	USER_PICTURE_DELETED = 'USER_PICTURE_DELETED',
	ROOM_HISTORY_CLEARED = 'ROOM_HISTORY_CLEARED',
	MEETING_CREATED = 'MEETING_CREATED',
	MEETING_STARTED = 'MEETING_STARTED',
	MEETING_JOINED = 'MEETING_PARTICIPANT_JOINED',
	MEETING_LEFT = 'MEETING_PARTICIPANT_LEFT',
	MEETING_STOPPED = 'MEETING_STOPPED',
	MEETING_DELETED = 'MEETING_DELETED',
	MEETING_AUDIO_STREAM_CHANGED = 'MEETING_AUDIO_STREAM_CHANGED',
	MEETING_MEDIA_STREAM_CHANGED = 'MEETING_MEDIA_STREAM_CHANGED',
	MEETING_AUDIO_ANSWERED = 'MEETING_AUDIO_ANSWERED',
	MEETING_SDP_OFFERED = 'MEETING_SDP_OFFERED',
	MEETING_SDP_ANSWERED = 'MEETING_SDP_ANSWERED',
	MEETING_PARTICIPANT_SUBSCRIBED = 'MEETING_PARTICIPANT_SUBSCRIBED',
	MEETING_PARTICIPANT_TALKING = 'MEETING_PARTICIPANT_TALKING',
	MEETING_PARTICIPANT_CLASHED = 'MEETING_PARTICIPANT_CLASHED',
	MEETING_WAITING_PARTICIPANT_JOINED = 'MEETING_WAITING_PARTICIPANT_JOINED',
	MEETING_USER_ACCEPTED = 'MEETING_WAITING_PARTICIPANT_ACCEPTED',
	MEETING_USER_REJECTED = 'MEETING_WAITING_PARTICIPANT_REJECTED',
	MEETING_WAITING_PARTICIPANT_CLASHED = 'MEETING_WAITING_PARTICIPANT_CLASHED',
	MEETING_RECORDING_STARTED = 'MEETING_RECORDING_STARTED',
	MEETING_RECORDING_STOPPED = 'MEETING_RECORDING_STOPPED'
}

export type WsEvent = InitializationEvent | PongEvent | WsConversationEvent | WsMeetingEvent;

export type InitializationEvent = {
	type: WsEventType.INITIALIZATION;
	queueId: string;
};

export type PongEvent = {
	type: WsEventType.PONG;
};
