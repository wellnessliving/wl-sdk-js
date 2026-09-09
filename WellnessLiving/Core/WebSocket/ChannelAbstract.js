/**
 * Base class for all channel controllers.
 *
 * A channel allows clients to subscribe to events, and allows server to send events to all subscribers instantly.
 *
 * A channel controller contains description of data and key fields, and a method that allows to check if key fields are
 * valid and current user has access to subscribe to this channel
 * ({@link Core_WebSocket_ChannelAbstract}).
 *
 * Key fields allow to clients to receive only events that correspond to these keys.
 * For example, if we have a channel "A message is added in a chat room", chat room would be a key.
 * Sender name and content of the message are data fields.
 * {@link Core_WebSocket_ChannelAbstract} should check if this room exists and current
 * user has access to view messages of this room.
 *
 * <b>How to create a new channel</b>
 *
 * To create a channel, you should do the following:
 * * Create a channel controller (successor of {@link Core_WebSocket_ChannelAbstract}).
 * * Register CID of the controller.
 * * Describe data and key fields in channel controller.
 * * Implement {@link Core_WebSocket_ChannelAbstract}.
 *   Check if key fields are valid and that current user has access to subscribe this channel.
 *
 * <b>How to send a new message to a channel</b>
 *
 * * Create an object of a channel controller.
 * * Fill in all data and key fields.
 * * Issue {@link Core_WebSocket_ChannelAbstract} on it.
 */
function Core_WebSocket_ChannelAbstract()
{
  // Empty constructor.
}

/**
 * Channel to pass over information about virtual account release.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AccountUpdateChannel = 733;

/**
 * When accumulation progress was changed new value is sent over this channel.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AccumulationProcessChannel = 549;

/**
 * Channel to pass over information about address verification.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AddressVerificationChannel = 828;

/**
 * A message is sent through this channel every time an alert created or read.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AlertChannel = 1342;

/**
 * Channel to notify user that class schedule is changed.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ClassListChannel = 298;

/**
 * A message is sent through this channel every time a client type is changed.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ClientTypeChangeChannel = 1820;

/**
 * Channel to notify user about new unsigned documents.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ContractChannel = 1660;

/**
 * Channel to pass over information about changing the dialog with specific client.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.DialogChannel = 963;

/**
 * Channel to pass over information about ticket status.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.DirectConnectTicketStatusChannel = 1421;

/**
 * Domain verification status verification channel.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.DomainVerifyStatusChannel = 1834;

/**
 * Example channel to test how asynchronous function calls work.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ExampleFunctionChannel = 19;

/**
 * When mail verify status was changed new value is sent over this channel.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.MailVerifyStatusChangeChannel = 677;

/**
 * Channel to pass over information about meeting creation.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.MeetingScheduleChannel = 688;

/**
 * Channel to inform Fitbuilder messenger about new information.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.MessageChannel = 1583;

/**
 * Channel to pass over information about new message in the chat.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.MessageHistoryChannel = 952;

/**
 * Channel to pass over information about booking.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.MultipleTaskSessionChannel = 1163;

/**
 * Channel to pass over information about payment status.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.PaymentStatusChannel = 1736;

/**
 * Channel to notify certain clients about changes of they schedule.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ProfileScheduleChannel = 510;

/**
 * Channel to pass over information about business import progress.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ProgressChannel = 1850;

/**
 * Channel to pass over information about changing the Self Check-In settings.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ReceptionDesignChannel = 1657;

/**
 * When the specified report is updated, auto-update request is sent over this channel.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ReportAutoUpdateChannel = 1543;

/**
 * Channel to notify certain user about complete of report accumulation process.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ReportBackgroundProcessChannel = 842;

/**
 * Channel to listen requests to access from franchisee.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.RequestChannel = 34;

/**
 * Channel to response support employee who is requesting access to business.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ResponseChannel = 41;

/**
 * Channel to inform staff members that request from support employee has been processed.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ResponseStaffChannel = 57;

/**
 * Channel to notify user that a session has been booked or book cancelled.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.ScheduleList_ScheduleListChannel = 305;

/**
 * Channel to pass over error message when failed sent SMS.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.SmsSendErrorChannel = 977;

/**
 * Channel to pass over information about unread SMS in the business.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.SmsUnreadCountChannel = 960;

/**
 * Channel to notify certain staff members about changes of schedule.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.StaffApp_ScheduleListChannel = 523;

/**
 * A message is sent through this channel every time a task created or edited.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.TaskChangeChannel = 1869;

/**
 * When title of a business is changed, new title is sent over this channel.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.TitleChangeChannel = 16;

/**
 * A message is sent through this channel every time a report gets updated.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.UpdateChannel = 735;

/**
 * A message is sent through this channel when the status of a visit is changed.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.VisitStatusChannel = 1921;
