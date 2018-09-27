export enum APP_ENUM {
	AuthToken = "authToken"
}

export enum POST_STATUS {
	Published = 1,
	Draft = 2,
	Deleted = 3
}

export enum STATUS_CODE {
	Success = 200,
	BadRequest = 400,
	NotAuthorize = 401,
	Forbid = 403,
	NotFound = 404,
	InternalError = 500,
	EmailNotConfirmed = 900,
	ResetPassTokenExpire = 901
}

export enum CommentStatus {
	Pending = 1,
	Approved = 2,
	Spam = 3,
	Trash = 4
}
