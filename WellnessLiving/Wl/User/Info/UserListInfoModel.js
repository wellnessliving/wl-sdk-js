/**
 * Retrieves information about users by email.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Info_UserListInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "text_mail,k_business";

  /**
   * @typedef {{}} Wl_User_Info_UserListInfoModel_a_user_data
   * @property {{}} a_relation Relation between the user and family members. Keys are UIDs of relatives, values - relation type from {@link RsFamilyRelationSid}.
   * @property {number} id_gender Gender type, One of {@link Wl_Gender_GenderSid} constants. Empty means that client is not selected gender type.
   * @property {boolean} is_address_inherited Whether an address of a user is inherited from a relative `true` - inherited, `false` - otherwise.
   * @property {boolean} is_inherited Whether an email of a user is inherited from a relative. `true` - inherited, `false` - otherwise.
   * @property {boolean} is_phone_inherited Whether phones of a user are inherited from a relative `true` - inherited, `false` - otherwise.
   * @property {string} k_city City key. Primary key in the  table.
   * @property {string} text_address User's address.
   * @property {string} text_birth User's birth date.
   * @property {string} text_business_uid_key Compound key delimited wit a colon. First part is business key. Primary key in  table. Second part - uid of a user. Primary key in  table.
   * @property {string} text_cell_phone User's phone.
   * @property {string} text_city User's city.
   * @property {string} text_home_phone User's home phone.
   * @property {string} text_mail User's email.
   * @property {string} text_member User's member ID.
   * @property {string} text_name_first User's first name.
   * @property {string} text_name_full User's full name.
   * @property {string} text_name_last User's last name.
   * @property {string} text_postal User's postal.
   * @property {string} text_work_phone User's work phone.
   * @property {string} url_photo User's photo url.
   */

  /**
   * Information about the user's. The information returned has the following structure:
   *
   * @get result
   * @type {Wl_User_Info_UserListInfoModel_a_user_data}
   */
  this.a_user_data = undefined;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * A user's email address.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Info_UserListInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Info_UserListInfoModel.prototype.config=function()
{
  return {"a_field":{"a_user_data":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_mail":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserListInfoModel.instanceGet
 * @param {string} text_mail A user's email address.
 * @param {string} k_business The key of the business.
 * @returns {Wl_User_Info_UserListInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about users by email.
 *
 * Searches for users with the given email address (or an email inherited from a relative)
 * across every business in the franchise, and returns their profile, address, and contact
 * information keyed by a combination of business key and UID.
 *
 * @function
 * @name Wl_User_Info_UserListInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
