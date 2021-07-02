/**
 * Class for generating keywords for php/sql editor on programmers page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_PrgKeywordModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_mode";

  /**
   * List of keywords.
   *
   * @get result
   * @type {{}}
   */
  this.a_keyword = undefined;

  /**
   * Mode for load keyword. One of {@link \Core\Prg\PrgKeywordModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_PrgKeywordModel);

/**
 * @inheritDoc
 */
Core_Prg_PrgKeywordModel.prototype.config=function()
{
  return {"a_field": {"a_keyword": {"get": {"result": true}},"id_mode": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Prg_PrgKeywordModel.instanceGet
 * @param {number} id_mode Mode for load keyword. One of {@link \Core\Prg\PrgKeywordModeSid} constants.
 * @returns {Core_Prg_PrgKeywordModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */