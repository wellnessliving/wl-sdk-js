/**
 * Deletes note.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Note_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit";

  /**
   * Uncompressed note content received from form.
   *
   * Each key is a note field key, and the value is the HTML content submitted for that field.
   *
   * @post post
   * @type {{}}
   */
  this.a_data = null;

  /**
   * @typedef {{}} Wl_Visit_Note_Edit_EditModel_a_data_note_additional
   * @property {string} html_note Additional note content as HTML. Empty string if not set.
   * @property {string} html_note_stripped Additional note content with formatting tags stripped. Empty string if not set.
   * @property {string} text_field Title of the additional note field.
   * @property {string} text_field_name Form field name used to submit the value back in `a_data`.
   * @property {string} text_id Form field element id.
   * @property {string} text_key Not translated field key.
   */

  /**
   * Content additional field of visit note. Format is same as `a_visit_note` field.
   *
   * List with a single item:
   *
   * @get result
   * @type {Wl_Visit_Note_Edit_EditModel_a_data_note_additional[]}
   */
  this.a_data_note_additional = undefined;

  /**
   * @typedef {{}} Wl_Visit_Note_Edit_EditModel_a_info
   * @property {string} dtl_create Local date and time the note was created. Empty string if the note was never created.
   * @property {string} dtl_edit Local date and time the note was last edited. Empty string if the note was never edited.
   * @property {string} k_visit_note Visit note key, primary key in . `0` if the note does not exist yet.
   * @property {string} k_visit_previous Key of the visit that has a previous note. `0` if a previous note does not exist.
   * @property {string} text_client_name Full name of the client the visit belongs to.
   * @property {string} text_create Name of the staff member who created the note.
   * @property {string} text_edit Name of the staff member who last edited the note.
   * @property {string} text_location Location title.
   * @property {string} text_service Service, class, event, or asset title.
   * @property {string} text_service_date Start date of the visit.
   * @property {string} text_service_time Start and end time of the visit.
   * @property {string} text_staff Staff full name.
   * @property {string} url_print URL to print the visit note.
   * @property {string} url_profile_create URL to the profile of the user who created the note. Empty string if the note does not exist.
   * @property {string} url_profile_edit URL to the profile of the user who last edited the note. Empty string if the note was never edited.
   */

  /**
   * Contains general information.
   *
   * Information about the visit note:
   *
   * @get result
   * @type {Wl_Visit_Note_Edit_EditModel_a_info}
   */
  this.a_info = undefined;

  /**
   * @typedef {{}} Wl_Visit_Note_Edit_EditModel_a_visit_note
   * @property {string} text_field A title of field of a visit note.
   * @property {string} text_field_name A field element name.
   * @property {string} text_id A field element id.
   * @property {string} text_key Not translated a title of field of a visit note.
   * @property {string} text_text A content of field of a visit note.
   */

  /**
   * List of notes:
   *
   * @get result
   * @type {Wl_Visit_Note_Edit_EditModel_a_visit_note[]}
   */
  this.a_visit_note = undefined;

  /**
   * Can the current user edit the note.
   *
   * @get result
   * @type {boolean}
   */
  this.can_edit = undefined;

  /**
   * Note type, one of {@link Wl_Visit_Note_Sid_NoteSid} constants.
   *
   * @get result
   * @post post
   * @see Wl_Visit_Note_Sid_NoteSid
   * @type {number}
   */
  this.id_note = 0;

  /**
   * `true` - if visit notes are new, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_new = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Visit note key.
   *
   * @delete get
   * @type {string}
   */
  this.k_visit_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Note_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Visit_Note_Edit_EditModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"a_data_note_additional":{"get":{"result":true}},"a_info":{"get":{"result":true}},"a_visit_note":{"get":{"result":true}},"can_edit":{"get":{"result":true}},"id_note":{"get":{"result":true},"post":{"post":true}},"is_new":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_visit":{"get":{"get":true},"post":{"get":true}},"k_visit_note":{"delete":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Visit_Note_Edit_EditModel.instanceGet
 * @param {string} k_visit Visit key. Empty value means not set.
 * @returns {Wl_Visit_Note_Edit_EditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes note.
 *
 * Removes the visit note record identified by `k_visit_note` after verifying that the
 * business is valid, the note exists, and the current staff member has privilege to delete
 * visit notes.
 *
 * @function
 * @name Wl_Visit_Note_Edit_EditModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets notes data.
 *
 * Validates the business and visit, accounting for franchise travel mode when the visit
 * belongs to a different franchisee business, checks that the current staff member has
 * privilege to view or edit visit notes, and loads the note fields, additional note field,
 * and general visit information needed to render the edit form.
 *
 * @function
 * @name Wl_Visit_Note_Edit_EditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves notes data.
 *
 * Validates the business, visit, and note type, checks that the current staff member has
 * privilege to edit visit notes, then creates or updates the compressed note content for the
 * visit in a transaction.
 *
 * @function
 * @name Wl_Visit_Note_Edit_EditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
