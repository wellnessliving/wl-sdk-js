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
 * Channel to notify the staff at the check-in kiosk of a location about every gym check-in and every failed gym
 * check-in attempt at that location, from any source.
 *
 * A check-in to a class, an event or an appointment and a failed attempt of it send nothing, and neither does an undo
 * of a check-in.
 *
 * The message carries no data of the client, of the user who made the attempt or of the pass: a broadcast reaches
 * every subscriber of the keys, so it cannot be limited to the clients that one staff member may see. On each message
 * the kiosk reads {@link Wl_Visit_Kiosk_AttemptListModel} with {@link Wl_Visit_Kiosk_AttemptListModel.dtu_since} equal to
 * {@link \Wl\Visit\Kiosk\AttemptChannel::$dtu_attempt} to get the full row of the attempt with its `s_attempt`.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AttemptChannel = 2461;

/**
 * The channel "the access of a user has changed": the authorization page of the user loads the request again.
 *
 * A project sends a message when it changes what its {@link \Core\OAuth\OAuthAccessInterface::access()} checks for the user, for
 * example when an administrator approves or rejects a request for access. The page `Core_OAuth_AuthorizeSpa`
 * subscribes while it shows a refusal of the project to a signed-in user, and on a message asks
 * {@link Core_OAuth_AuthorizeModel} again: the consent or the new refusal appears without a reload of the page. The message has
 * no data: only the fact of the change matters, so only the last message is kept. To send it, create an object, set
 * {@link \Core\OAuth\AuthorizeChangeChannel::$uid} and call {@link \Core\WebSocket\ChannelBroadcast::notify()}.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.AuthorizeChangeChannel = 2389;

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
 * Channel to notify staff that the visit of a ticket of a session has been created or changed, for ex. checked in.
 *
 * Staff members who watch the check-in list of the same session subscribe to the channel to keep the list and the
 * counters up to date. The message carries no personal data of the ticket holder: clients load them with the list.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.TicketScanChannel = 2382;

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

/**
 * Channel to tell the page that adds a pass to Apple Wallet that the pass is in the wallet.
 *
 * The phone tells it itself: when a pass is put into Wallet, the phone registers itself in the web service of Apple Wallet,
 * see {@link Wl_Wallet_Apple_AppleRegistrationModel}, and the web service notifies this channel. The page of
 * `WalletAddController` is subscribed to the channel of every ticket of the link, and shows that the pass is added when it
 * has heard of all of them. A page that did not hear anything stays as it is: the user is told what to do anyway.
 *
 * The page is opened without a login, so the access is given by a signature of the ticket, which only the page that
 * checked the link of the wallet gets, see {@link \Wl\Wallet\WalletAddChannel::signGet()}.
 *
 * @type {number}
 */
Core_WebSocket_ChannelAbstract.WalletAddChannel = 2528;
