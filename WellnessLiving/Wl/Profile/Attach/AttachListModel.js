/**
 * Manages client attachment list.
 *
 * This model is generated automatically based on API.
 *
 * @augments Core_Spa_Model
 * @constructor
 * @see Wl\Profile\Attach\AttachListApi
 */
function Wl_Profile_Attach_AttachListModel()
{
  Core_Spa_Model.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_backend";

  /**
   * List of client attach.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = [];

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = true;

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

Core_Spa_Model.extend(Wl_Profile_Attach_AttachListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attach_AttachListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"text_search": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attach_AttachListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid Business key.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Profile_Attach_AttachListModel}
 * @see Core_Spa_Model.instanceGet()
 */