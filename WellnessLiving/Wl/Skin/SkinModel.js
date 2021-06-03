/**
 * Retrieves skin settings for customisation of client application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_SkinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_skin";

  /**
   * Skin fields to save.
   * Key is full name of the skin field, it is separated string containing field name and element name from
   * {@link \Wl\Skin\Application\Application::field_list()}.
   * Value is new field value.
   *
   * @post post
   * @type {{}}
   */
  this.a_field = undefined;

  /**
   * Skin data.
   * Result of the {@link \RsSkinData::skin()} method.
   *
   * @get result
   * @type {{}}
   */
  this.a_skin = undefined;

  /**
   * Skin type, one of {@link RsSkinSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_skin = undefined;

  /**
   * Skin key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_skin = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_SkinModel);

/**
 * @inheritDoc
 */
Wl_Skin_SkinModel.prototype.config=function()
{
  return {"a_field": {"a_field": {"post": {"post": true}},"a_skin": {"get": {"result": true}},"id_skin": {"get": {"result": true}},"k_skin": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Skin_SkinModel.instanceGet
 * @param {string} k_skin Skin key.
 * @returns {Wl_Skin_SkinModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */