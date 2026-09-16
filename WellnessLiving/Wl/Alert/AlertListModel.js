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
   * @property {string} k_alert Alert key.  table.
   * @property {string} k_business Business key.  table.
   * @property {string} s_icon_class Icon class. See {@link Wl_Alert_AlertAbstract}.
   * @property {string} text_message Alert message.
   * @property {string} text_title Alert title.
   * @property {?string} uid_client User key associated with this alert.    .    `null` if user is walk-in.
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
   * Key of the business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Alert_AlertListModel);

/**
 * @inheritDoc
 */
Wl_Alert_AlertListModel.prototype.config=function()
{
  return {"a_field":{"a_alert_list":{"get":{"result":true}},"a_alert_read":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Returns all alerts for the user.
 *
 * Validates that the user has access to the business, then loads the alert list for the current
 * user. Additional alert data needed to make alerts tappable is included only when the request
 * comes from the staff backend.
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
