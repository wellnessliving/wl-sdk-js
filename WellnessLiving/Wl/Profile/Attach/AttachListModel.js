/**
 * Returns the list of file attachments for the specified client in the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attach_AttachListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_backend";

  /**
   * @typedef {{}} Wl_Profile_Attach_AttachListModel_a_list
   * @property {string} dtu_create Date and time of creation in UTC MySQL format.
   * @property {string} dtu_edit Date and time of the last edit in UTC MySQL format.
   * @property {?number} i_height Image height in pixels. `null` if not an image or dimensions are unavailable.
   * @property {number} i_show_delete Flag indicating whether to show the delete button. `'1'` to show, `'0'` to hide. Only present in backend mode.
   * @property {?number} i_width Image width in pixels. `null` if not an image or dimensions are unavailable.
   * @property {number} id_preview List of file extensions.
   * @property {boolean} is_private `true` if the attachment is private (not visible to the client); `false` otherwise. Only present in backend mode.
   * @property {string} k_attach Attachment key.
   * @property {string} k_business Business key.
   * @property {?string} k_quiz_response Quiz response key. `null` if the attachment is not from a quiz response.
   * @property {?string} text_description Attachment description. `null` if no description. Only present in backend mode.
   * @property {string} text_filename Attachment file name.
   * @property {string} text_filesize Human-readable file size (for example, "1.2 MB").
   * @property {string} text_filetype File extension in lowercase (for example, "pdf", "jpg").
   * @property {string} text_source Source description (for example, quiz title or "Uploaded by staff"). Only present in backend mode.
   * @property {string} text_uploaded_by Name of the user who uploaded the attachment. Empty string if unknown.
   * @property {string} text_uploaded_date Formatted upload date in the business locale.
   * @property {string} url_file URL to download the attachment file.
   * @property {?string} url_preview URL to a preview image (50x50). `null` if preview is not available for this file type.
   */

  /**
   * List of client attachments.
   * Each element:
   *
   * @get result
   * @type {Wl_Profile_Attach_AttachListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The filter phrase to filter attach by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attach_AttachListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attach_AttachListModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"is_backend":{"get":{"get":true}},"k_business":{"get":{"get":true}},"text_search":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attach_AttachListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid Business key.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Profile_Attach_AttachListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of file attachments for the specified client in the given business.
 *
 * Returns all file attachments uploaded to the client's profile. In backend mode the result
 * also includes private attachments that are hidden from the client-facing view, with
 * additional metadata such as source, description, and a delete permission flag.
 *
 * @function
 * @name Wl_Profile_Attach_AttachListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
