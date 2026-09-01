/**
 * Fires an in-app alert for the specified event.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_AiAgent_Alert_AlertModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.cid_alert = "";

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Conversation link assigned by the `AI Agent`.
   *
   * @post post
   * @type {string}
   */
  this.url_conversation = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_AiAgent_Alert_AlertModel);

/**
 * @inheritDoc
 */
Wl_AiAgent_Alert_AlertModel.prototype.config=function()
{
  return {"a_field":{"cid_alert":{"post":{"post":true}},"k_business":{"post":{"get":true}},"url_conversation":{"post":{"post":true}}}};
};

/**
 * Fires an in-app alert for the specified event.
 *
 * Triggers the alert that appears in the business `Alert Center` for staff members with appropriate access.
 * Requires the business to have an active `AI Agent` subscription.
 *
 * @function
 * @name Wl_AiAgent_Alert_AlertModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
