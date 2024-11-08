/**
 * Api endpoint to get information about self check-in design.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Reception\Roster\Design\ReceptionRosterDesignApi
 */
function Wl_Reception_Roster_Design_ReceptionRosterDesignModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config
     * @property {number[]} a_payment_reattempt_not_decline_reason List of not allowed decline reasons to payment reattempt. Each element is one of {@link Wl_Pay_PayExceptionSid} constants.
     * @property {number} a_wait_service Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.
     * @property {number} i_book_before Minimum hours|days|months before class should be booked.
     * @property {number} i_book_future Maximum hours|days|months after class can be booked.
     * @property {number} i_cancel Minimum hours|days|months before class should be canceled without penalty.
     * @property {number} i_confirm_delay Delay in seconds on attendance web app confirmation screen before redirect to login screen.
     * @property {number} i_promote Minimum hours|days|months before class should be promoted from wait list.
     * @property {number} i_promote_fastest_response Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.
     * @property {number} i_promote_require_confirm Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.
     * @property {number} i_reattempt_count Number of failed auto-payments reattempts.
     * @property {number} id_book_before Hours|days|months from {@link ADurationSid}.
     * @property {number} id_book_future Hours|days|months from {@link ADurationSid}.
     * @property {number} id_cancel Hours|days|months from {@link ADurationSid}.
     * @property {number} id_promote Hours|days|months from {@link ADurationSid}.
     * @property {number} id_promote_fastest_response Hours|days|months from {@link ADurationSid}.
     * @property {number} id_promote_require_confirm Hours|days|months from {@link ADurationSid}.
     * @property {boolean} is_book_inside_active_pay_period if `true` - clients with purchase options are only allowed
     * to book sessions within their current paid period, `false` - during purchase option's duration.
     * @property {number} is_disable_promotion 1 if a client's automatic payment fails, their account should not be
     * debited and their purchase option becomes inactive, 0 - otherwise. Default 0.
     * @property {boolean} is_enable_payment_penalty Whether to charge penalty after final auto-payment attempt.
     * @property {boolean} is_enable_payment_reattempt Whether to reattempt failed auto-payments.
     * @property {boolean} is_enable_staff_ip_restriction Whether to restrict which IP addresses staff can login from.
     * @property {number} is_prevent_booking 1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0.
     * @property {boolean} is_staff_restrict If true, client can not choose provider while appointment wizard.
     * @property {boolean} is_wait Enable\disable wait list.
     * @property {number} k_currency Currency from rs.currency table.
     * @property {number} k_timezone Timezone from get.timezone table.
     * @property {string} m_payment_penalty Penalty amount to charge after final auto-payment attempt.
     * @property {string} s_color Code of background color.
     * @property {boolean} show_business_name <tt>true</tt> - show business name on attendance web app; <tt>false</tt> - do not show.
     * @property {boolean} show_confirm_screen <tt>true</tt> - show confirm screen on attendance web app; <tt>false</tt> - do not show.
     * @property {string} text_business_name Name of the business to display in the attendance web app.
     * @property {string} url_custom Custom Url of a business
     */

    /**
     * Business config data:
     * <dl>
     *   <dt>int[] <var>a_payment_reattempt_not_decline_reason</var></dt>
     *   <dd>
     *     List of not allowed decline reasons to payment reattempt. Each element is one of {@link Wl_Pay_PayExceptionSid} constants.
     *   </dd>
     *   <dt>int <var>a_wait_service</var></dt>
     *   <dd>Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.</dd>
     *   <dt>int <var>i_book_before</var></dt>
     *   <dd> Minimum hours|days|months before class should be booked.</dd>
     *   <dt>int <var>i_book_future</var></dt>
     *   <dd> Maximum hours|days|months after class can be booked.</dd>
     *   <dt>int <var>i_cancel</var></dt>
     *   <dd> Minimum hours|days|months before class should be canceled without penalty.</dd>
     *   <dt>int <var>i_confirm_delay</var></dt>
     *   <dd>Delay in seconds on attendance web app confirmation screen before redirect to login screen.</dd>
     *   <dt>int <var>i_promote</var></dt>
     *   <dd> Minimum hours|days|months before class should be promoted from wait list.</dd>
     *   <dt>int <var>i_promote_fastest_response</var></dt>
     *   <dd> Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.</dd>
     *   <dt>int <var>i_promote_require_confirm</var></dt>
     *   <dd> Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.</dd>
     *   <dt>int <var>i_reattempt_count</var></dt>
     *   <dd>Number of failed auto-payments reattempts.</dd>
     *   <dt>int <var>id_book_before</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>int <var>id_book_future</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>int <var>id_cancel</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>int <var>id_promote</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>int <var>id_promote_fastest_response</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>int <var>id_promote_require_confirm</var></dt>
     *   <dd>Hours|days|months from {@link ADurationSid}.</dd>
     *   <dt>bool <var>is_book_inside_active_pay_period</var></dt>
     *   <dd>if `true` - clients with purchase options are only allowed
     *     to book sessions within their current paid period, `false` - during purchase option's duration.</dd>
     *   <dt>int <var>is_disable_promotion</var></dt>
     *   <dd>1 if a client's automatic payment fails, their account should not be
     *     debited and their purchase option becomes inactive, 0 - otherwise. Default 0.</dd>
     *   <dt>bool <var>is_enable_payment_penalty</var></dt>
     *   <dd>Whether to charge penalty after final auto-payment attempt.</dd>
     *   <dt>bool <var>is_enable_payment_reattempt</var></dt>
     *   <dd>Whether to reattempt failed auto-payments.</dd>
     *   <dt>bool <var>is_enable_staff_ip_restriction</var></dt>
     *   <dd>Whether to restrict which IP addresses staff can login from.</dd>
     *   <dt>int <var>is_prevent_booking</var></dt>
     *   <dd>1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0.</dd>
     *   <dt>bool <var>is_staff_restrict</var></dt>
     *   <dd>If true, client can not choose provider while appointment wizard.</dd>
     *   <dt>bool <var>is_wait</var></dt>
     *   <dd>Enable\disable wait list.</dd>
     *   <dt>int <var>k_currency</var></dt>
     *   <dd>Currency from rs.currency table.</dd>
     *   <dt>int <var>k_timezone</var></dt>
     *   <dd>Timezone from get.timezone table.</dd>
     *   <dt>string <var>m_payment_penalty</var></dt>
     *   <dd>Penalty amount to charge after final auto-payment attempt.</dd>
     *   <dt>string <var>s_color</var></dt>
     *   <dd>Code of background color.</dd>
     *   <dt>bool <var>show_business_name</var></dt>
     *   <dd><tt>true</tt> - show business name on attendance web app; <tt>false</tt> - do not show.</dd>
     *   <dt>bool <var>show_confirm_screen</var></dt>
     *   <dd><tt>true</tt> - show confirm screen on attendance web app; <tt>false</tt> - do not show.</dd>
     *   <dt>string <var>text_business_name</var></dt>
     *   <dd>Name of the business to display in the attendance web app.</dd>
     *   <dt>string <var>url_custom</var></dt>
     *   <dd>Custom Url of a business</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_business_config}
     */
    this.a_business_config = [];

    /**
     * Key of the business.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.k_business = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_Design_ReceptionRosterDesignModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_Design_ReceptionRosterDesignModel.prototype.config=function()
{
    return {"a_field": {"a_business_config": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}}}};
};