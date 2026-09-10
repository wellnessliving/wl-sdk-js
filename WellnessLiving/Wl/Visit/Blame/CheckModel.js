/**
 * Gets visit status.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Blame_CheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit,k_business";

  /**
   * Amount to be charged to the user.
   *
   * `null` if specified visit is not the blame, according business late cancel and no shows rules.
   *
   * @get result
   * @type {?string}
   */
  this.html_fee_amount = null;

  /**
   * Visit status. One of {@link Wl_Visit_VisitSid} constants.
   *
   * @get get
   * @see Wl_Visit_VisitSid
   * @type {number}
   */
  this.id_visit = 0;

  /**
   * Blame status of the visit.
   *
   * `true` if specified visit, according business late cancel and no shows rules, is blamed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_blame = undefined;

  /**
   * ID of business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit ID to get status for.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Whether display the confirmation modal.
   *
   * `true` the confirmation modal must be shown if specified visit, according business late cancel
   * and no shows rules, is blamed and the current user has the privilege to decide whether to charge a penalty or not.
   * `false` - do not show the confirmation modal.
   *
   * @get result
   * @type {boolean}
   */
  this.show_confirm = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Blame_CheckModel);

/**
 * @inheritDoc
 */
Wl_Visit_Blame_CheckModel.prototype.config=function()
{
  return {"a_field":{"html_fee_amount":{"get":{"result":true}},"id_visit":{"get":{"get":true}},"is_blame":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_visit":{"get":{"get":true}},"show_confirm":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Visit_Blame_CheckModel.instanceGet
 * @param {string} k_visit Visit ID to get status for.
 * @param {string} k_business ID of business.
 * @returns {Wl_Visit_Blame_CheckModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets visit status.
 *
 * Checks the specified visit against the business late cancellation and no show rules,
 * returning the fee amount that would be charged, whether the visit is blamed, and whether
 * a confirmation modal must be shown before charging the fee.
 *
 * @function
 * @name Wl_Visit_Blame_CheckModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
