/**
 * Endpoint for upload and manage attachments.
 *
 * This model is generated automatically based on API.
 *
 * @augments Core_Spa_Model
 * @constructor
 * @see Wl\Profile\Attach\AttachElementApi
 */
function Wl_Profile_Attach_AttachElementModel()
{
  Core_Spa_Model.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Uploaded file.
   *
   * @post post
   * @type {{}}
   */
  this.a_file = [];

  /**
   * Date and time of the creation.
   *
   * @get result
   * @type {string}
   */
  this.dtu_create = "";

  /**
   * Date and time of the last edit.
   *
   * @get result
   * @type {string}
   */
  this.dtu_edit = "";

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
   * @put get
   * @type {string}
   */
  this.k_attach = "";

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
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
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Attachment file name.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_filename = "";

  /**
   * Attachment file size.
   *
   * @get result
   * @type {string}
   */
  this.text_filesize = "";

  /**
   * Attachment file type.
   *
   * @get result
   * @type {string}
   */
  this.text_filetype = "";

  /**
   * User key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = "";

  /**
   * URL to get attachment file.
   *
   * @get result
   * @type {string}
   */
  this.url_file = "";

  /**
   * URL to get preview attachment data.
   *
   * `null` in case when preview not available.
   *
   * @get result
   * @type {?string}
   */
  this.url_preview = "";

  this.changeInit();
}

Core_Spa_Model.extend(Wl_Profile_Attach_AttachElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attach_AttachElementModel.prototype.config=function()
{
  return {"a_field": {"a_file": {"post": {"post": true}},"dtu_create": {"get": {"result": true}},"dtu_edit": {"get": {"result": true}},"is_private": {"post": {"post": true}},"k_attach": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"s_show_delete": {"get": {"result": true}},"text_description": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"text_filename": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"text_filesize": {"get": {"result": true}},"text_filetype": {"get": {"result": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"url_file": {"get": {"result": true}},"url_preview": {"get": {"result": true}}}};
};