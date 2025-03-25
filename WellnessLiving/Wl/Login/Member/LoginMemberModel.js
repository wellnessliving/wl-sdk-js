/**
 * An endpoint that manages client ID.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_LoginMemberModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * The date when client became a member.
   *
   * @post result
   * @type {string}
   */
  this.dt_member = "";

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user's ID to get/set.
   *
   * @get result
   * @post get
   * @type {string}
   */
  this.s_member = "";

  /**
   * The user's key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Login_Member_LoginMemberModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberModel.prototype.config=function()
{
  return {
    "a_field": {
      "dt_member": {"post": {"result": true}},
      "k_business": {"get": {"get": true},"post": {"get": true}},
      "s_member": {"get": {"result": true},"post": {"get": true}},
      "uid": {"get": {"get": true},"post": {"get": true}}
    }
  };
};

/**
 * @function
 * @name Wl_Login_Member_LoginMemberModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_LoginMemberModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */