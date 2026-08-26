/**
 * Types of lead stages.
 *
 * Every stage has a type. The type is selected when the stage is created and can not be changed afterwards,
 * neither for system stages ({@link Wl_Lead_Stage_LeadStageSystemSid}) nor for stages created by a business.
 *
 * A business must always have at least one stage of every type, so the last stage of a type can not be deleted.
 *
 * Last used ID: 3.
 */
function Wl_Lead_Stage_LeadStageTypeSid()
{
  // Empty constructor.
}

/**
 * A lead is lost - the client will not make a purchase.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageTypeSid.LOST = 3;

/**
 * A lead is still in the funnel - the business is working with the client.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageTypeSid.OPEN = 1;

/**
 * A lead is won - the client is converted into a member.
 *
 * @type {number}
 */
Wl_Lead_Stage_LeadStageTypeSid.WON = 2;
