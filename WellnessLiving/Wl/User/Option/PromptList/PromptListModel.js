/**
 * Entry point to set "checked" on confirmed prompt.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Option_PromptList_PromptListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_option,s_value,uid";

  /**
   * Option ID.
   *
   * @delete get
   * @post get
   * @type {number}
   */
  this.id_option = undefined;

  /**
   * Option value.
   *
   * @post post
   * @type {string}
   */
  this.s_value = undefined;

  /**
   * User key for which option value is updated. Primary key in {@link \PassportLoginSql}.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Option_PromptList_PromptListModel);

/**
 * @inheritDoc
 */
Wl_User_Option_PromptList_PromptListModel.prototype.config=function()
{
  return {"a_field": {"id_option": {"delete": {"get": true},"post": {"get": true}},"s_value": {"post": {"post": true}},"uid": {"delete": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_User_Option_PromptList_PromptListModel.instanceGet
 * @param {number} id_option Option ID.
 * @param {string} s_value Option value.
 * @param {string} uid User key for which option value is updated. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_User_Option_PromptList_PromptListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */