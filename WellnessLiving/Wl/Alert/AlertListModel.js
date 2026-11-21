/**
 * Returns all alerts for the user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Alert_AlertListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Alert_AlertListModel_a_alert_list
   * @property {number} cid_alert CID of alert, a subclass of {@link Wl_Alert_AlertAbstract}.
   * @property {string} dtl_create Date and time in MySQL format, when an alert has been added.
   * @property {number} i_difference Quantity of seconds passed from an alert sending.
   * @property {boolean} is_read Determines whether the alert was read by the user.
   * @property {string} k_alert Alert key.
   * @property {string} k_business Business key.
   * @property {string} s_icon_class Icon class. See {@link Wl_Alert_AlertAbstract}.
   * @property {string} text_message Alert message.
   * @property {string} text_title Alert title.
   * @property {?string} uid_client User key associated with this alert.     `null` if user is walk-in.
   * @property {string} url_detail A link to detail page related to the alert.    Can be empty if the user had no access to this page at the time the alert was created.
   * @property {string} url_logo Url to user's logo.
   */

  /**
   * List of alerts.
   *
   * @get result
   * @type {Wl_Alert_AlertListModel_a_alert_list[]}
   */
  this.a_alert_list = undefined;

  /**
   * List of alert keys to mark as read.
   * `null` to set all alerts as read.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_alert_read = null;

  /**
   * @typedef {{}} Wl_Alert_AlertListModel_a_pinned
   * @property {string} k_task Task key.
   * @property {string} text_assign Who the task is assigned to and, when there is one, the client: "Assigned to Alice for Bob". An empty   string when no assignee gets a name.
   * @property {string} text_due The due date and time in the time zone of the business, as the page of the Task Manager shows a date: "Due   on Mon, Nov 2, 2026 at 10:00am".
   * @property {string} text_overdue How late the task is: "2 days overdue". A pinned task is late 1 day or more.
   * @property {string} text_title The name of the task, in full.
   * @property {string} url_task The address of the Task Manager that opens the form of the task.
   */

  /**
   * The tasks that are pinned to the top of the Alert Center: the open tasks that are overdue by 24 hours or more, the
   * oldest due date first, at most 5. Empty unless {@link Wl_Alert_AlertListModel.is_pinned} is set, and for a user who gets no
   * "Task due" alert.
   *
   * @get result
   * @type {Wl_Alert_AlertListModel_a_pinned[]}
   */
  this.a_pinned = undefined;

  /**
   * Whether to return the pinned tasks of {@link Wl_Alert_AlertListModel.a_pinned}. `true` to return them, `false` otherwise.
   * Only a client that draws the group asks for it.
   *
   * @get get
   * @type {boolean}
   */
  this.is_pinned = false;

  /**
   * Whether more tasks are pinned than {@link Wl_Alert_AlertListModel.a_pinned} has. `true` when there are more, so the client
   * shows the link {@link Wl_Alert_AlertListModel.url_pinned_more}, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_pinned_more = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The address of the page with every overdue task, the tab Overdue of the Task Manager. Empty when
   * {@link Wl_Alert_AlertListModel.is_pinned_more} is `false`.
   *
   * @get result
   * @type {string}
   */
  this.url_pinned_more = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Alert_AlertListModel);

/**
 * @inheritDoc
 */
Wl_Alert_AlertListModel.prototype.config=function()
{
  return {"a_field":{"a_alert_list":{"get":{"result":true}},"a_alert_read":{"post":{"post":true}},"a_pinned":{"get":{"result":true}},"is_pinned":{"get":{"get":true}},"is_pinned_more":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"url_pinned_more":{"get":{"result":true}}}};
};

/**
 * Returns all alerts for the user.
 *
 * Validates that the user has access to the business, then loads the alert list for the current
 * user. Additional alert data needed to make alerts tappable is included only when the request
 * comes from the staff backend. The pinned overdue tasks are loaded only when the client asks for them.
 *
 * @function
 * @name Wl_Alert_AlertListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sets alerts as already read.
 *
 * Validates that the user has access to the business and that any provided alert keys are valid,
 * marks the specified alerts (or all alerts when none are specified) as read, and sends the
 * updated unread alert count to the client.
 *
 * @function
 * @name Wl_Alert_AlertListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
