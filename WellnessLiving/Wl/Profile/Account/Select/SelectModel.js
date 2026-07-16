/**
 * Retrieves information about user specified in {@link Wl_Profile_Account_Select_SelectModel.uid}
 * and his relationship with sub accounts.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Account_Select_SelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Account_Select_SelectModel_a_user
   * @property {number} id_family_relation ID of relationship between current user and sub account.
   * @property {string} s_name Name of sub account.
   * @property {string} uid UID of sub account.
   */

  /**
   * Array with information about current user and his relationship with sub accounts.
   *
   * @get result
   * @type {Wl_Profile_Account_Select_SelectModel_a_user}
   */
  this.a_user = undefined;

  /**
   * Business to retrieve relationship information.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID to retrieve relationship information.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * ID of relative to sign in.
   *
   * @post post
   * @type {string}
   */
  this.uid_in = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Account_Select_SelectModel);

/**
 * @inheritDoc
 */
Wl_Profile_Account_Select_SelectModel.prototype.config=function()
{
  return {"a_field":{"a_user":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}},"uid_in":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Account_Select_SelectModel.instanceGet
 * @param {string} uid UID to retrieve relationship information.
 * @param {string} k_business Business to retrieve relationship information.
 * @returns {Wl_Profile_Account_Select_SelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about user specified in {@link Wl_Profile_Account_Select_SelectModel.uid}
and his relationship with sub accounts.
 *
 * Returns all user's relatives and type of relationship, which are allowed to sign in with.
 * So, you can use this list to sign in user as hist relative, but this is not the best way to get full family.
 * Business can set that parent can sign in as his child, but child cannot sign in as his parent. So, this method
 * will return children for parent, but will not return parents for child.
 *
 * @function
 * @name Wl_Profile_Account_Select_SelectModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Signs in user specified in {@link Wl_Profile_Account_Select_SelectModel.uid_in}.
 *
 * Returns an error if you try to sign in user not according to the business permissions.
 *
 * @function
 * @name Wl_Profile_Account_Select_SelectModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
