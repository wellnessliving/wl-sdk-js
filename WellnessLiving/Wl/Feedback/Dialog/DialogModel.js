/**
 * User feedback endpoint.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Feedback_Dialog_DialogModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Area, which feedback is about.
   * One of {@link \Wl\Feedback\Dialog\FeedbackAreaSid}.
   *
   * @post post
   * @type {number}
   */
  this.id_feedback_area = 0;

  /**
   * Staff feedback rate.
   * One of {@link \Wl\Feedback\Dialog\FeedbackRateSid}.
   *
   * @post post
   * @type {number}
   */
  this.id_rate = 0;

  /**
   * Business key.
   * Primary key in {@link \RsBusinessSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Staff member key.
   * Primary key in {@link \RsStaffSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * Staff feedback text.
   *
   * @post post
   * @type {string}
   */
  this.text_feedback = "";

  /**
   * Link of page from which feedback was sent.
   *
   * @post post
   * @type {string}
   */
  this.text_link = "";

  /**
   * Title of page from which feedback was sent.
   *
   * @post post
   * @type {string}
   */
  this.text_page = "";

  /**
   * User key.
   * Primary key in {@link \PassportLoginSql}.
   *
   * @post post
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Feedback_Dialog_DialogModel);

/**
 * @inheritDoc
 */
Wl_Feedback_Dialog_DialogModel.prototype.config=function()
{
  return {"a_field": {"id_feedback_area": {"post": {"post": true}},"id_rate": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_staff": {"post": {"post": true}},"text_feedback": {"post": {"post": true}},"text_link": {"post": {"post": true}},"text_page": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};