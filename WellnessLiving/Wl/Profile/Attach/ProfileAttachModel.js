/**
 * Point to conduct attached files.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attach_ProfileAttachModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of attaches.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_attach = undefined;

  /**
   * Comments for exists attaches.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {{}}
   */
  this.attach_comment = [];

  /**
   * New files for exists attaches.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {{}}
   */
  this.attach_file = [];

  /**
   * New names for exists attache.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {{}}
   */
  this.attach_name = [];

  /**
   * Old attaches which must be kept.
   * If this field does not contain a attach, it will be removed with POST.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {{}}
   */
  this.attach_save = [];

  /**
   * Comments for new attaches.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {string[]}
   */
  this.new_attach_comment = [];

  /**
   * Files for new attaches.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {{}[]}
   */
  this.new_attach_file = [];

  /**
   * Names for new attaches.
   *
   * Strange name for compatibility with old server side.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @post post
   * @type {string[]}
   */
  this.new_attach_name = [];

  /**
   * Business primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Business primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attach_ProfileAttachModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attach_ProfileAttachModel.prototype.config=function()
{
  return {"a_field": {"a_attach": {"get": {"result": true}},"attach_comment": {"post": {"post": true}},"attach_file": {"post": {"post": true}},"attach_name": {"post": {"post": true}},"attach_save": {"post": {"post": true}},"new_attach_comment": {"post": {"post": true}},"new_attach_file": {"post": {"post": true}},"new_attach_name": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attach_ProfileAttachModel.instanceGet
 * @param {string} k_business Business primary key in {@link \RsBusinessSql} table.
 * @param {string} uid Business primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Profile_Attach_ProfileAttachModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */