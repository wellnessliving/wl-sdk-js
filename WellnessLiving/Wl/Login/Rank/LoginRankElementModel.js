/**
 * Deletes a rank record for a user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Rank_LoginRankElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * To delete entire rank category from this user.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_rank_category = false;

  /**
   * Business key.
   *
   * @delete get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Login rank key.
   *
   * @delete get
   * @type {string}
   */
  this.k_login_rank = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Rank_LoginRankElementModel);

/**
 * @inheritDoc
 */
Wl_Login_Rank_LoginRankElementModel.prototype.config=function()
{
  return {"a_field":{"is_rank_category":{"delete":{"get":true}},"k_business":{"delete":{"get":true}},"k_login_rank":{"delete":{"get":true}}}};
};

/**
 * Deletes a rank record for a user.
 *
 * Removes the rank record from the database and logs the action in the belt history.
 *
 * @function
 * @name Wl_Login_Rank_LoginRankElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */
