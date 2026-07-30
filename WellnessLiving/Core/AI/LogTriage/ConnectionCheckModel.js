/**
 * Returns a fixed value used to verify the signed SDK connection.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_AI_LogTriage_ConnectionCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Connection check value.
   *
   * @get result
   * @type {number}
   */
  this.i_result = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_AI_LogTriage_ConnectionCheckModel);

/**
 * @inheritDoc
 */
Core_AI_LogTriage_ConnectionCheckModel.prototype.config=function()
{
  return {"a_field":{"i_result":{"get":{"result":true}}}};
};

/**
 * Returns a fixed value used to verify the signed SDK connection.
 *
 * @function
 * @name Core_AI_LogTriage_ConnectionCheckModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
