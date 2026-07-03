/**
 * Deletes existing note.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Alert_AlertEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The list of location keys to flag client in.
   *
   * @post post
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertEditModel_a_login_note_data_a_location
   * @property {string} html_title HTML-escaped location title.
   * @property {boolean} is_select `true` if this location is selected for the flag; `false` otherwise.
   * @property {string} k_id Location key.
   * @property {string} text_title Location title.
   */

  /**
   * @typedef {{}} Wl_Profile_Alert_AlertEditModel_a_login_note_data
   * @property {Wl_Profile_Alert_AlertEditModel_a_login_note_data_a_location} a_location List of locations the note applies to. Each element:
   * @property {boolean} can_flag `true` if the current user can flag the client; `false` otherwise.
   * @property {number} id_login_note_access Class for access type to login note.
   * @property {number} id_login_note_flag List of modes to change user's "flag" status within a location
   * @property {?number} id_source Different sources of flags, which are not set manually by the staff member. Such flags have own logic.
   * @property {boolean} is_automated `true` if the note was created by an automated process; `false` if created manually.
   * @property {boolean} is_book `true` if the flagged client is allowed to book; `false` otherwise.
   * @property {boolean} is_flag `true` if the client is currently flagged; `false` otherwise.
   * @property {boolean} is_icon `true` if a flag icon should be displayed; `false` otherwise.
   * @property {boolean} is_location_multiple `true` if the business has multiple locations; `false` otherwise.
   * @property {boolean} is_purchase `true` if the flagged client is allowed to make purchases; `false` otherwise.
   * @property {boolean} is_remove `true` if the note is marked for removal; `false` otherwise.
   * @property {string} k_business Business key.
   * @property {string} k_login_note Login note key.
   * @property {string} s_text Note text content.
   * @property {string} text_flag_description Description of the flag source for display.
   * @property {string} text_flag_disable Text explaining how to disable the automated flag. Empty string if the flag is manual.
   * @property {string} uid User key of the flagged client.
   * @property {string} url_action URL to submit the login note edit form.
   */

  /**
   * Login note information.
   *
   * @get result
   * @type {Wl_Profile_Alert_AlertEditModel_a_login_note_data}
   */
  this.a_login_note_data = undefined;

  /**
   * Class for access type to login note.
   *
   * Values:
   * - 1 (`CLIENT`): Login note can view all staff and client.
   * - 2 (`ME`): Login note can view only staff which create this note.
   * - 3 (`STAFF`): Login note can view only all staff.
   *
   * @post post
   * @see RsLoginNoteAccessSid
   * @type {number}
   */
  this.id_login_note_access = 0;

  /**
   * Whether flagged user can book. Does not matter if [AlertEditApi](/Wl/Profile/Alert/AlertEdit.json) is `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book = false;

  /**
   * Whether to flag the user.
   *
   * @post post
   * @type {boolean}
   */
  this.is_flag = false;

  /**
   * Whether flagged user can make purchases. Does not matter if [AlertEditApi](/Wl/Profile/Alert/AlertEdit.json) is `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_purchase = false;

  /**
   * Key of current business.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Login note key to edit or get info for.
   * Empty if new entry is being added.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_login_note = "";

  /**
   * Note text.
   *
   * @post post
   * @type {string}
   */
  this.text_note = "";

  /**
   * Key of a user to show information or post a note for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Alert_AlertEditModel);

/**
 * @inheritDoc
 */
Wl_Profile_Alert_AlertEditModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"post":{"post":true}},"a_login_note_data":{"get":{"result":true}},"id_login_note_access":{"post":{"post":true}},"is_book":{"post":{"post":true}},"is_flag":{"post":{"post":true}},"is_purchase":{"post":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_login_note":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true}},"text_note":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Deletes existing note.
 *
 * Permanently removes the login note specified by `k_login_note` from the business, requiring
 * backend access for the current user.
 *
 * @function
 * @name Wl_Profile_Alert_AlertEditModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Retrieves login note data.
 *
 * Loads a single login note for editing, including its text, access type, flag settings,
 * booking and purchase restrictions, and location flags. Used to populate the edit form before
 * saving changes.
 *
 * @function
 * @name Wl_Profile_Alert_AlertEditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates new text note or updates the existing one.
 *
 * Creates or updates a login note on the client's profile, setting its text, access
 * restrictions, booking and purchase flags, and the locations where the note applies. Used by
 * staff to attach internal notes or warnings that appear on check-in and booking flows.
 *
 * @function
 * @name Wl_Profile_Alert_AlertEditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
