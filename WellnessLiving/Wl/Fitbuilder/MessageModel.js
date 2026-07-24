/**
 * Notifies messengers with new information.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Fitbuilder_MessageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Fitbuilder_MessageModel_a_data_message
   * @property {number} id Message key.
   * @property {string} message Message text.
   * @property {string} updated_at Date/time when the message has been posted.
   */

  /**
   * @typedef {{}} Wl_Fitbuilder_MessageModel_a_data_user_profile
   * @property {number} id_gender User gender. One of {@link Wl_Gender_GenderSid} constants.
   * @property {string} s_first_name User first name.
   * @property {string} s_last_name User last name.
   * @property {string} uid User key.
   * @property {string} url_photo URL of the user's profile photo.
   */

  /**
   * @typedef {{}} Wl_Fitbuilder_MessageModel_a_data
   * @property {Wl_Fitbuilder_MessageModel_a_data_message} message Message information:
   * @property {Wl_Fitbuilder_MessageModel_a_data_user_profile} user_profile User's information:
   */

  /**
   * Messenger information:
   *
   * @post post
   * @type {Wl_Fitbuilder_MessageModel_a_data}
   */
  this.a_data = undefined;

  /**
   * Messenger channel key.
   *
   * @post get
   * @type {string}
   */
  this.k_channel = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Fitbuilder_MessageModel);

/**
 * @inheritDoc
 */
Wl_Fitbuilder_MessageModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"k_channel":{"post":{"get":true}}}};
};

/**
 * Notifies messengers with new information.
 *
 * Accepts a channel key and a data payload, then dispatches a notification to the Fitbuilder messenger channel
 * associated with that key. Requires the `notify` API privilege.
 *
 * @function
 * @name Wl_Fitbuilder_MessageModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
