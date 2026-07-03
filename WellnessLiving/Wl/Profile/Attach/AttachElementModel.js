/**
 * Deletes the attachment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attach_AttachElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Uploaded file.
   *
   * @post post
   * @type {string}
   */
  this.a_file = "";

  /**
   * Date and time of the creation.
   *
   * @get result
   * @type {string}
   */
  this.dtu_create = undefined;

  /**
   * Date and time of the last edit.
   *
   * @get result
   * @type {string}
   */
  this.dtu_edit = undefined;

  /**
   * `true` if the attachment is private; `false` otherwise.
   * `null` until initialized.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_private = null;

  /**
   * Attachment key.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_attach = "";

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
   * Flag for showing a delete button.
   *
   * @get result
   * @type {string}
   */
  this.s_show_delete = undefined;

  /**
   * Attachment description.
   *
   * `null` for not update description.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.text_description = null;

  /**
   * Attachment file name.
   *
   * `null` for not update file name.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.text_filename = null;

  /**
   * Attachment file size.
   *
   * @get result
   * @type {string}
   */
  this.text_filesize = undefined;

  /**
   * Attachment file type.
   *
   * @get result
   * @type {string}
   */
  this.text_filetype = undefined;

  /**
   * User key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * URL to get attachment file.
   *
   * @get result
   * @type {string}
   */
  this.url_file = undefined;

  /**
   * URL to get preview attachment data.
   *
   * `null` in case when preview not available.
   *
   * @get result
   * @type {?string}
   */
  this.url_preview = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attach_AttachElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attach_AttachElementModel.prototype.config=function()
{
  return {"a_field":{"a_file":{"post":{"post":true}},"dtu_create":{"get":{"result":true}},"dtu_edit":{"get":{"result":true}},"is_private":{"post":{"post":true}},"k_attach":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"s_show_delete":{"get":{"result":true}},"text_description":{"get":{"result":true},"post":{"post":true}},"text_filename":{"get":{"result":true},"post":{"post":true}},"text_filesize":{"get":{"result":true}},"text_filetype":{"get":{"result":true}},"uid":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"url_file":{"get":{"result":true}},"url_preview":{"get":{"result":true}}}};
};

/**
 * Deletes the attachment.
 *
 * Permanently removes the specified attachment from the client profile and logs the deletion
 * action in the business audit trail.
 *
 * @function
 * @name Wl_Profile_Attach_AttachElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets the data for the attachment editing form.
 *
 * Returns attachment metadata including filename, description, filesize, file type, creation
 * and edit timestamps, download URL, preview URL, and a flag indicating whether the current
 * user has permission to delete the attachment.
 *
 * @function
 * @name Wl_Profile_Attach_AttachElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * In case the attachment key is not specified, it adds a new attachment.
In case the attachment key is specified, edits the attachment.
 *
 * When [AttachElementApi](/Wl/Profile/Attach/AttachElement.json) is empty, uploads a new file to the client profile; when set, updates the
 * attachment metadata, file content, or visibility flag depending on the provided fields.
 *
 * @function
 * @name Wl_Profile_Attach_AttachElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
