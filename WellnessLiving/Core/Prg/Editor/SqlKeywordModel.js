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
   * List of all MySQL connections.
   *
   * Key is name of a MySQL connection.
   *
   * Value is a list of tables in that connection.
   * Alternatively, value may have name of another connection - in a case a list of tables in these two connections
   * are equal.
   *
   * @get result
   * @type {string[][]|string[]}
   */
  this.a_connection = undefined;

  /**
   * @typedef {{}} Core_Prg_Editor_SqlKeywordModel_a_table
   * @property {string} s_type Type of the column.
   * @property {string} [s_table] Name of a table in which this column is a primary key.
   * 
   *   Not specified if this column is not a primary key.
   */

  /**
   * List of information about tables.
   *
   * Key is name of a table.
   * Value is an array with the following structure:<dl>
   * <dt>string <var>s_type</var></dt>
   * <dd>Type of the column.</dd>
   * <dt>string <var>[s_table]</var></dt>
   * <dd>
   *   Name of a table in which this column is a primary key.
   *
   *   Not specified if this column is not a primary key.
   * </dd>
   * </dl>
   *
   * @get result
   * @type {Core_Prg_Editor_SqlKeywordModel_a_table[]}
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
  return {"a_field": {"a_connection": {"get": {"result": true}},"a_table": {"get": {"result": true}}}};
};