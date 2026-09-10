/**
 * Promotes a visit.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Promote_PromoteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the source where a visit was promoted, one of {@link Wl_Mode_ModeSid} constants.
   *
   * `null` if not initialized yet.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The visit key to promote.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Message about successful promote.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Promote_PromoteModel);

/**
 * @inheritDoc
 */
Wl_Book_Promote_PromoteModel.prototype.config=function()
{
  return {"a_field":{"id_mode":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_visit":{"post":{"post":true}},"text_message":{"post":{"result":true}}}};
};

/**
 * Promotes a visit.
 *
 * Confirms a client's booking for a class or event, or marks it as promoted when no explicit
 * confirmation is required. The visit must belong to the given business and must be a class
 * or event booking - appointments are not supported by this endpoint. Returns a message that
 * describes the outcome: confirmed, promoted, or promoted with a confirmation email pending.
 *
 * @function
 * @name Wl_Book_Promote_PromoteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
