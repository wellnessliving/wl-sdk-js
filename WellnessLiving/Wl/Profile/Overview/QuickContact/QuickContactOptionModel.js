/**
 * Returns notification availability flags for the specified client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Overview_QuickContact_QuickContactOptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Whether the Brivo mobile pass invitation action is available for this client.
   * `true` if Brivo invitation is available, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_brivo = undefined;

  /**
   * Whether the Password Reset email action is available for this client.
   * `true` if the password reset template is enabled, the client login is not disabled
   * and the client is not a virtual user, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_password_reset = undefined;

  /**
   * Whether the Welcome email action is available for this client.
   * `true` if the Welcome email template is enabled for this business and the client has
   * an email address, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_welcome = undefined;

  /**
   * Whether the Welcome email has already been sent to this client.
   * `true` if a Welcome email was sent previously, `false` otherwise.
   * Only meaningful when {@link Wl_Profile_Overview_QuickContact_QuickContactOptionModel.is_welcome} is `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_welcome_sent = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Client user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Overview_QuickContact_QuickContactOptionModel);

/**
 * @inheritDoc
 */
Wl_Profile_Overview_QuickContact_QuickContactOptionModel.prototype.config=function()
{
  return {"a_field":{"is_brivo":{"get":{"result":true}},"is_password_reset":{"get":{"result":true}},"is_welcome":{"get":{"result":true}},"is_welcome_sent":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Overview_QuickContact_QuickContactOptionModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid Client user key.
 * @returns {Wl_Profile_Overview_QuickContact_QuickContactOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns notification availability flags for the specified client.
 *
 * Checks whether the Welcome email, Password Reset email and Brivo mobile pass invitation
 * actions are available for the client identified by {@link Wl_Profile_Overview_QuickContact_QuickContactOptionModel.k_business}
 * and {@link Wl_Profile_Overview_QuickContact_QuickContactOptionModel.uid}.
 *
 * @function
 * @name Wl_Profile_Overview_QuickContact_QuickContactOptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
