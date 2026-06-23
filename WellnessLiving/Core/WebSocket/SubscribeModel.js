/**
 * Checks whether a listener can subscribe to specified channel.
 * Subscribes in a case of positive result.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_WebSocket_SubscribeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys of the channel.
   *
   * Key is name of a key field in a channel controller.
   * Value is its value.
   *
   * Subscriber will only receive notifications about events in which all these values equal values specified here.
   *
   * @post post
   * @type {*}
   */
  this.a_key = undefined;

  /**
   * All messages in queue. Key is a message key. Value is message data.
   *
   * When a client is initially subscribed for a WebSocket channel, entire message queue is sent to the client.
   * This is needed to send message that were generated before a client has subscribed.
   *
   * @post result
   * @type {*[]}
   */
  this.a_message_broadcast = undefined;

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
   *
   * Values:
   * - 1921 (`Wl\Visit\VisitStatusChannel`): A message is sent through this channel when the status of a visit is changed.
   * - 1869 (`Wl\Task\TaskChangeChannel`): A message is sent through this channel every time a task created or edited.
   * - 1583 (`Wl\Fitbuilder\MessageChannel`): Channel to inform Fitbuilder messenger about new information.
   * - 1342 (`Wl\Alert\AlertChannel`): A message is sent through this channel every time an alert created or read.
   * - 733 (`Wl\Virtual\AccountUpdateChannel`): Channel to pass over information about virtual account release.
   * - 688 (`Wl\Virtual\MeetingScheduleChannel`): Channel to pass over information about meeting creation.
   * - 735 (`Thoth\ReportCore\Generator\UpdateChannel`): A message is sent through this channel every time a report gets updated.
   * - 19 (`Core\WebSocket\Example\ExampleFunctionChannel`): Example channel to test how asynchronous function calls work.
   * - 1820 (`Wl\Member\Info\ClientTypeChangeChannel`): A message is sent through this channel every time a client type is changed.
   * - 842 (`Wl\Report\Background\ReportBackgroundProcessChannel`): Channel to notify certain user about complete of report accumulation process.
   * - 1543 (`Wl\Report\AutoUpdate\ReportAutoUpdateChannel`): When the specified report is updated, auto-update request is sent over this channel.
   * - 977 (`Wl\Business\Sms\SmsSendErrorChannel`): Channel to pass over error message when failed sent SMS.
   * - 16 (`Wl\Business\Edit\TitleChangeChannel`): When title of a business is changed, new title is sent over this channel.
   * - 1834 (`Wl\Mail\Domain\DomainVerifyStatusChannel`): Domain verification status verification channel.
   * - 677 (`Wl\Mail\Verify\MailVerifyStatusChangeChannel`): When mail verify status was changed new value is sent over this channel.
   * - 1657 (`Wl\Reception\Design\ReceptionDesignChannel`): Channel to pass over information about changing the Self Check-In settings.
   * - 298 (`Wl\Schedule\ClassList\ClassListChannel`): Channel to notify user that class schedule is changed.
   * - 305 (`Wl\Schedule\ScheduleList\ScheduleListChannel`): Channel to notify user that a session has been booked or book cancelled.
   * - 1163 (`Wl\Book\Multiple\MultipleTaskSessionChannel`): Channel to pass over information about booking.
   * - 1850 (`Wl\Import\Progress\ProgressChannel`): Channel to pass over information about business import progress.
   * - 510 (`Wl\Profile\Schedule\ProfileScheduleChannel`): Channel to notify certain clients about changes of they schedule.
   * - 1660 (`Wl\Profile\Contract\ContractChannel`): Channel to notify user about new unsigned documents.
   * - 1421 (`Thoth\PayProcessor\DirectConnect\Ticket\DirectConnectTicketStatusChannel`): Channel to pass over information about ticket status.
   * - 960 (`Wl\Business\Sms\Unread\SmsUnreadCountChannel`): Channel to pass over information about unread SMS in the business.
   * - 34 (`Wl\Business\AuthorizeSupport\Request\RequestChannel`): Channel to listen requests to access from franchisee.
   * - 41 (`Wl\Business\AuthorizeSupport\Response\ResponseChannel`): Channel to response support employee who is requesting access to business.
   * - 57 (`Wl\Business\AuthorizeSupport\ResponseStaff\ResponseStaffChannel`): Channel to inform staff members that request from support employee has been processed.
   * - 523 (`Wl\Schedule\ScheduleList\StaffApp\ScheduleListChannel`): Channel to notify certain staff members about changes of schedule.
   * - 828 (`Wl\Postcard\Campaign\CampaignEdit\AddressVerificationChannel`): Channel to pass over information about address verification.
   * - 1736 (`Thoth\PayProcessor\Nuvei\Terminal\OMNIChannelApi\PaymentStatusChannel`): Channel to pass over information about payment status.
   * - 963 (`Wl\Business\Sms\Chat\Dialog\DialogChannel`): Channel to pass over information about changing the dialog with specific client.
   * - 952 (`Wl\Business\Sms\Chat\Dialog\MessageHistoryChannel`): Channel to pass over information about new message in the chat.
   * - 549 (`Wl\Business\Franchise\Report\Curves\AccumulationProcessChannel`): When accumulation progress was changed new value is sent over this channel.
   *
   * @post post
   * @type {number}
   */
  this.cid_channel = 0;

  /**
   * Subscriber password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Request token.
   *
   * This token is only used for asynchronous functions, and identifies a specific request.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_WebSocket_SubscribeModel);

/**
 * @inheritDoc
 */
Core_WebSocket_SubscribeModel.prototype.config=function()
{
  return {"a_field":{"a_key":{"post":{"post":true}},"a_message_broadcast":{"post":{"result":true}},"cid_channel":{"post":{"post":true}},"s_password":{"post":{"post":true}},"s_token":{"post":{"post":true}}}};
};

/**
 * Checks whether a listener can subscribe to specified channel.
Subscribes in a case of positive result.
 *
 * Called by the WebSocket client immediately after a connection is established, to register interest in
 * a specific channel (identified by CID and key fields). If the current user is not permitted to receive
 * events on that channel, the subscription is rejected. On success, any messages already queued for the
 * channel are returned so the client does not miss events that arrived before the subscription was set up.
 *
 * @function
 * @name Core_WebSocket_SubscribeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
