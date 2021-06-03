/**
 * Get PostgreSQL query and connection to execute.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_PgSql_QueryExecuteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Result of the executing query.
   *
   * @post result
   * @type {string}
   */
  this.html_body = undefined;

  /**
   * Data for connection to execute PostgreSQL query.
   *
   * @post post
   * @type {string}
   */
  this.s_connect = undefined;

  /**
   * PostgreSQL query to execute.
   *
   * @post post
   * @type {string}
   */
  this.s_pgsql_query = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_PgSql_QueryExecuteModel);

/**
 * @inheritDoc
 */
Core_Prg_PgSql_QueryExecuteModel.prototype.config=function()
{
  return {"a_field": {"html_body": {"post": {"result": true}},"s_connect": {"post": {"post": true}},"s_pgsql_query": {"post": {"post": true}}}};
};