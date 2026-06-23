/**
 * Verifies client's progress log data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_VerifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Local date without time of the progress log.
   *
   * @put get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Business key.
   *
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   *
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_VerifyModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_VerifyModel.prototype.config=function()
{
  return {"a_field":{"dt_date":{"put":{"get":true}},"k_business":{"put":{"get":true}},"uid":{"put":{"get":true}}}};
};

/**
 * Verifies client's progress log data.
 *
 * Marks all unverified progress log entries for the specified user and date as verified by the currently
 * signed-in staff member, then triggers a search index reindex for the user.
 *
 * @function
 * @name Wl_Member_Progress_Log_VerifyModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
