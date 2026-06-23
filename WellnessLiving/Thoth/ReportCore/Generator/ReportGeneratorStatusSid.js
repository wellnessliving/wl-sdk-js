/**
 * Lists statuses of reports from point of view of its generation.
 */
function Thoth_ReportCore_Generator_ReportGeneratorStatusSid()
{
  // Empty constructor.
}

/**
 * Report is in an inconsistent state.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.ABORTED = 6;

/**
 * Current operation is being aborted now.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.ABORTING = 5;

/**
 * This report is being deleted now.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.DELETING = 4;

/**
 * This report is being generated now.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.GENERATING = 2;

/**
 * Generation of this report is queued. It will start automatically when generation of other reports completes.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.QUEUED = 1;

/**
 * Generation of this report is now completed.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorStatusSid.READY = 3;
