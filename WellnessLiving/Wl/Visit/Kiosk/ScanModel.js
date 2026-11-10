/**
 * Finds the client by a scanned value.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Kiosk_ScanModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Result of the scan.
   *
   * One of {@link Wl_Visit_Kiosk_ScanResultSid} constants.
   *
   * @post result
   * @see Wl_Visit_Kiosk_ScanResultSid
   * @type {number}
   */
  this.id_scan_result = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location of the kiosk.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * First name of the client.
   *
   * `null` if no client is found.
   *
   * @post result
   * @type {?string}
   */
  this.text_name_first = null;

  /**
   * Last name of the client.
   *
   * `null` if no client is found.
   *
   * @post result
   * @type {?string}
   */
  this.text_name_last = null;

  /**
   * The scanned value: a member ID or a dynamic barcode, for example `100245`.
   *
   * The symbols that are not letters or digits are cut from both ends.
   *
   * @post post
   * @type {string}
   */
  this.text_scan = "";

  /**
   * Key of the client.
   *
   * `null` if no client is found.
   *
   * @post result
   * @type {?string}
   */
  this.uid = null;

  /**
   * Address of the photo of the client, for example `https://example.com/photo.jpg`.
   *
   * `null` if no client is found.
   *
   * @post result
   * @type {?string}
   */
  this.url_photo = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Kiosk_ScanModel);

/**
 * @inheritDoc
 */
Wl_Visit_Kiosk_ScanModel.prototype.config=function()
{
  return {"a_field":{"id_scan_result":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}},"text_name_first":{"post":{"result":true}},"text_name_last":{"post":{"result":true}},"text_scan":{"post":{"post":true}},"uid":{"post":{"result":true}},"url_photo":{"post":{"result":true}}}};
};

/**
 * Finds the client by a scanned value.
 *
 * The result is one of:
 * <ul>
 * <li>the client is found: the key, the name and the photo of the client;</li>
 * <li>no client that the staff member may see matches the value;</li>
 * <li>the member ID of the client is inactive;</li>
 * <li>the dynamic barcode has expired;</li>
 * <li>the business uses QR codes, which the kiosk does not read: every scan gives this result.</li>
 * </ul>
 * Only one client is returned: there is no list of the candidates.
 *
 * @function
 * @name Wl_Visit_Kiosk_ScanModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
