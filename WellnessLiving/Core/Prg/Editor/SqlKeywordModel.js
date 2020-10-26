/**
 * Class for generating keywords for sql editor on programmers page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_Editor_SqlKeywordModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of mysql connection.
   *
   * @get result
   * @type {{}}
   */
  this.a_connection = undefined;

  /**
   * List of information about tables.
   *
   * @get result
   * @type {{}}
   */
  this.a_table = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_Editor_SqlKeywordModel);

/**
 * @inheritDoc
 */
Core_Prg_Editor_SqlKeywordModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_connection": {
        "get": {
          "result": true
        }
      },
      "a_table": {
        "get": {
          "result": true
        }
      }
    }
  };
};