// Video meeting management
export {
  getBusyVideoTimes,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  createInstantMeetingWithCalVideo,
} from "./lib/videoClient";

// Recording and transcription services
export {
  getRecordingsOfCalVideoByRoomName,
  getDownloadLinkOfCalVideoByRecordingId,
  getAllTranscriptsAccessLinkFromRoomName,
  getAllTranscriptsAccessLinkFromMeetingId,
  submitBatchProcessorTranscriptionJob,
  getTranscriptsAccessLinkFromRecordingId,
  checkIfRoomNameMatchesInRecording,
} from "./lib/recordingService";
