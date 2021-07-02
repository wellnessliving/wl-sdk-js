/**
 * API class to handle requests to save user feedback.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Feedback_Modal_FeedbackModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Feedback_Modal_FeedbackModel_a_options
   * @property {boolean} is_checked <tt>true</tt> if this is default score, <tt>false</tt> is not.
   * @property {string} text_label Score label.
   * @property {string} text_value Score value.
   */

  /**
   * Score options to select. Each element of the array has next structure:
   * <dl>
   *   <dt>
   *     bool <var>is_checked</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if this is default score, <tt>false</tt> is not.
   *   </dd>
   *   <dt>
   *     string <var>text_label</var>
   *   </dt>
   *   <dd>
   *     Score label.
   *   </dd>
   *   <dt>
   *     string <var>text_value</var>
   *   </dt>
   *   <dd>
   *     Score value.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Feedback_Modal_FeedbackModel_a_options}
   */
  this.a_options = undefined;

  /**
   * User score.
   * <tt>null</tt> if user clicked "Not Now".
   *
   * @post post
   * @type {?number}
   */
  this.i_score = null;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Staff key.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * <tt>true</tt> if show modal window, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_modal = undefined;

  /**
   * First name of current user.
   *
   * @get result
   * @type {string}
   */
  this.text_first_name = undefined;

  /**
   * User key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Feedback_Modal_FeedbackModel);

/**
 * @inheritDoc
 */
Wl_Feedback_Modal_FeedbackModel.prototype.config=function()
{
  return {"a_field": {"a_options": {"get": {"result": true}},"i_score": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_staff": {"get": {"result": true},"post": {"post": true}},"show_modal": {"get": {"result": true}},"text_first_name": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Feedback_Modal_FeedbackModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Feedback_Modal_FeedbackModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */