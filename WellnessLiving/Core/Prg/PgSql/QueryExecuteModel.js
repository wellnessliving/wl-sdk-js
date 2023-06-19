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
   * `true` if the query must be executed on behalf of the root,
   * `false` if the query must be executed on behalf of a normal user with limited rights.
   *
   * @post post
   * @type {boolean}
   */
  this.is_root = undefined;

  /**
   * The connection key to execute PostgreSQL query.
   * One of the result keys of the {@link Core\Prg\PgSql\QueryPgSqlExecute::connectionList()} method.
   *
   * @post post
   * @type {string}
   */
  this.s_connection = undefined;

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
  return {"a_field": {"html_body": {"post": {"result": true}},"is_root": {"post": {"post": true}},"s_connection": {"post": {"post": true}},"s_pgsql_query": {"post": {"post": true}}}};
};