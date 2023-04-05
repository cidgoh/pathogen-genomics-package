"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[537],{3537:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const a={VirusSeq_Portal:{fileType:"tsv",status:"published",method:function(e){const t=new Map([["study_id",[]],["specimen collector sample ID",[]],["GISAID accession",[]],["sample collected by",[]],["sequence submitted by",[]],["sample collection date",[]],["sample collection date null reason",[]],["geo_loc_name (country)",[]],["geo_loc_name (state/province/territory)",[]],["organism",[]],["isolate",[]],["fasta header name",["isolate"]],["purpose of sampling",[]],["purpose of sampling details",[]],["anatomical material",[]],["anatomical part",[]],["body product",[]],["environmental material",[]],["environmental site",[]],["collection device",[]],["collection method",[]],["host (scientific name)",[]],["host disease",[]],["host age",[]],["host age null reason",[]],["host age unit",[]],["host age bin",[]],["host gender",[]],["purpose of sequencing",[]],["purpose of sequencing details",[]],["sequencing instrument",[]],["sequencing protocol",[]],["raw sequence data processing method",[]],["dehosting method",[]],["consensus sequence software name",[]],["consensus sequence software version",[]],["breadth of coverage value",[]],["depth of coverage value",[]],["reference genome accession",[]],["bioinformatics protocol",[]],["gene name",[]],["diagnostic pcr Ct value",[]],["diagnostic pcr Ct value null reason",[]]]),o=new Map([["not applicable","Not Applicable"],["missing","Missing"],["not collected","Not Collected"],["not provided","Not Provided"],["restricted access","Restricted Access"]]),a={"Alberta Precision Labs (APL)":"ABPL-AB","BCCDC Public Health Laboratory":"BCCDC-BC","Manitoba Cadham Provincial Laboratory":"MCPL-MB","New Brunswick - Vitalité Health Network":"VHN-NB","Newfoundland and Labrador - Eastern Health":"EH-NL","Nova Scotia Health Authority":"NSHA-NS","Public Health Ontario (PHO)":"PHO-ON","Laboratoire de santé publique du Québec (LSPQ)":"LSPQ-QC","Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)":"RRPL-SK"},s=e.getFields(e.table),n=e.getFieldNameMap(s);e.getHeaderMap(t,s,"VirusSeq_Portal");const i=[[...t.keys()]],_=new Set(["xs:nonNegativeInteger","xs:decimal"]);for(const r of e.getTrimmedData(e.hot)){const E=[];var c=!1;for(const[i,d]of t)if(!0===c)c=!1;else{var l=e.getMappedField(i,r,d,s,n,":","VirusSeq_Portal");if("study_id"==i){const e=r[n["sequence submitted by"]];e&&e in a&&(l=a[e])}if("breadth of coverage value"==i&&l&&l.length&&"%"!=l.substr(-1)&&(l+="%"),t.has(i+" null reason"))if(d.length>0){const e=s[n[d[0]]];e?e.dataStatus&&e.dataStatus.includes(l)?(E.push(""),c=!0):o.has(l.toLowerCase())?(l=o.get(l.toLowerCase()),E.push(""),c=!0):_.has(e.datatype)&&isNaN(Number(l))&&(E.push(""),c=!0):alert('Template configuration error: "'+i+'" has misnamed source field.')}else alert('Template configuration error: "'+i+'" has no source mapped field.');E.push(l)}i.push(E)}return i}},BioSample:{fileType:"xls",status:"published",method:function(e){const t=new Map([["sample_name",[]],["bioproject_accession",[]],["GISAID_accession",[]],["collected_by",[]],["sequenced_by",[]],["sample collection date",[]],["geo_loc_name",["geo_loc_name (country)","geo_loc_name (province/territory)"]],["organism",[]],["isolate",[]],["GISAID_virus_name",[]],["purpose_of_sampling",[]],["description",[]],["isolation_source",["anatomical material","anatomical part","body product","environmental material","environmental site","collection device","collection method"]],["anatomical_material",[]],["anatomical_part",[]],["body_product",[]],["environmental_material",[]],["environmental_site",[]],["collection_device",[]],["collection_method",[]],["lab_host",[]],["passage_history",[]],["passage_method",[]],["host",[]],["host_health_state",[]],["host_disease_outcome",[]],["host_disease",[]],["host_age",[]],["host_sex",[]],["host_subject_id",[]],["purpose_of_sequencing",[]],["gene_name_1",[]],["diagnostic_PCR_CT_value_1",[]],["gene_name_2",[]],["diagnostic_PCR_CT_value_2",[]]]),o=e.getFields(e.table),a=e.getFieldNameMap(o);e.getHeaderMap(t,o,"BIOSAMPLE");const s=[[...t.keys()]];for(const n of e.getTrimmedData(e.hot)){const i=[];for(const[s,_]of t){const t=e.getMappedField(s,n,_,o,a,":","BIOSAMPLE");i.push(t)}s.push(i)}return s}},GISAID:{fileType:"xls",status:"published",method:function(e){const t=[["Submitter",[]],["FASTA filename",[]],["Virus name",[]],["Type",[]],["Passage details/history",[]],["Collection date",[]],["Location",[]],["Additional location information",[]],["Host",[]],["Additional host information",[]],["Sampling Strategy",[]],["Gender",[]],["Patient age",[]],["Patient status",[]],["Specimen source",[]],["Outbreak",[]],["Last vaccinated",[]],["Treatment",[]],["Sequencing technology",[]],["Assembly method",[]],["Coverage",[]],["Originating lab",[]],["Address",[]],["Sample ID given by the sample provider",[]],["Submitting lab",[]],["Address",["sequence submitter contact address"]],["Sample ID given by the submitting laboratory",[]],["Authors",[]]],o=e.getFields(e.table),a=e.getFieldNameMap(o);e.getHeaderMap(t,o,"GISAID");const s=[Array.from(t,(e=>e[0]))];for(const n of e.getTrimmedData(e.hot)){const e=[];for(const[s]of t.entries()){const i=t[s][0],_=t[s][1];if("Type"===i){e.push("betacoronavirus");continue}const c=[];for(const e of _){let t=a[e],s=n[t];if(!s)continue;const i=o[t],l=s.toLowerCase().trim();if("specimen processing"===i.fieldName){if(!l.split(";").includes("virus passage"))continue;s="Virus passage"}if(i.dataStatus&&i.dataStatus.map((e=>e.toLowerCase().trim())).includes(l)){if(_.length>1)continue;s="Unknown"}"passage number"===i.fieldName&&(s="passage number "+s),c.push(s)}"Assembly method"===i?e.push(c.join(":")):e.push(c.join(";"))}s.push(e)}return s.splice(0,0,["submitter","fn","covv_virus_name","covv_type","covv_passage","covv_collection_date","covv_location","covv_add_location","covv_host","covv_add_host_info","covv_sampling_strategy","covv_gender","covv_patient_age","covv_patient_status","covv_specimen","covv_outbreak","covv_last_vaccinated","covv_treatment","covv_seq_technology","covv_assembly_method","covv_coverage","covv_orig_lab","covv_orig_lab_addr","covv_provider_sample_id","covv_subm_lab","covv_subm_lab_addr","covv_subm_sample_id","covv_authors"]),s}},"NML LIMS":{fileType:"csv",status:"published",method:function(e){const t=new Map([["TEXT_ID",[]],["HC_TEXT5",[]],["PH_ID_NUMBER_PRIMARY",[]],["PH_CASE_ID",[]],["PH_RELATED_PRIMARY_ID",[]],["PH_BIOPROJECT_ACCESSION",[]],["PH_BIOSAMPLE_ACCESSION",[]],["PH_SRA_ACCESSION",[]],["SUBMISSIONS - GISAID Accession ID",[]],["CUSTOMER",[]],["PH_SEQUENCING_CENTRE",[]],["HC_COLLECT_DATE",[]],["HC_TEXT2",[]],["HC_COUNTRY",[]],["HC_PROVINCE",[]],["HC_CURRENT_ID",[]],["RESULT - CANCOGEN_SUBMISSIONS",[]],["HC_SAMPLE_CATEGORY",[]],["PH_SAMPLING_DETAILS",[]],["PH_SPECIMEN_TYPE",[]],["PH_RELATED_RELATIONSHIP_TYPE",[]],["PH_ISOLATION_SITE_DESC",[]],["PH_ISOLATION_SITE",[]],["PH_SPECIMEN_SOURCE",[]],["PH_SPECIMEN_SOURCE_DESC",[]],["PH_ENVIRONMENTAL_MATERIAL",[]],["PH_ENVIRONMENTAL_SITE",[]],["PH_SPECIMEN_TYPE_ORIG",[]],["COLLECTION_METHOD",[]],["PH_ANIMAL_TYPE",[]],["PH_HOST_HEALTH",[]],["PH_HOST_HEALTH_DETAILS",[]],["PH_HOST_HEALTH_OUTCOME",[]],["PH_HOST_DISEASE",[]],["PH_AGE",[]],["PH_AGE_UNIT",[]],["PH_AGE_GROUP",[]],["VD_SEX",[]],["PH_HOST_COUNTRY",[]],["PH_HOST_PROVINCE",[]],["HC_ONSET_DATE",[]],["HC_SYMPTOMS",[]],["PH_VACCINATION_HISTORY",[]],["VE_SYMP_AVAIL",[]],["PH_EXPOSURE_COUNTRY",[]],["PH_TRAVEL",[]],["PH_POINT_OF_ENTRY",[]],["PH_DAY",[]],["PH_EXPOSURE",[]],["PH_EXPOSURE_DETAILS",[]],["PH_HOST_ROLE",[]],["PH_REASON_FOR_SEQUENCING",[]],["PH_REASON_FOR_SEQUENCING_DETAILS",[]],["PH_SEQUENCING_DATE",[]],["PH_LIBRARY_PREP_KIT",[]],["PH_INSTRUMENT_CGN",[]],["PH_TESTING_PROTOCOL",[]],["PH_SEQ_PROTOCOL_NAME",[]],["PH_RAW_SEQUENCE_METHOD",[]],["PH_DEHOSTING_METHOD",[]],["PH_CONSENSUS_SEQUENCE",[]],["PH_CONSENSUS_SEQUENCE_VERSION",[]],["PH_BIOINFORMATICS_PROTOCOL",[]],["PH_LINEAGE_CLADE_NAME",[]],["PH_LINEAGE_CLADE_SOFTWARE",[]],["PH_LINEAGE_CLADE_VERSION",[]],["PH_VARIANT_DESIGNATION",[]],["PH_VARIANT_EVIDENCE",[]],["PH_VARIANT_EVIDENCE_DETAILS",[]],["SUBMITTED_RESLT - Gene Target #1",[]],["SUBMITTED_RESLT - Gene Target #1 CT Value",[]],["SUBMITTED_RESLT - Gene Target #2",[]],["SUBMITTED_RESLT - Gene Target #2 CT Value",[]],["SUBMITTED_RESLT - Gene Target #3",[]],["SUBMITTED_RESLT - Gene Target #3 CT Value",[]],["PH_CANCOGEN_AUTHORS",[]],["HC_COMMENTS",[]],["host (scientific name)",[]]]),o=e.getFields(e.table),a=e.getFieldNameMap(o);e.getHeaderMap(t,o,"NML_LIMS");const s=[[...t.keys()]],n=new Map([["not applicable","Not Applicable"],["missing","Missing"],["not collected","Not Collected"],["not provided","Not Provided"],["restricted access","Restricted Access"]]),i=new Set(["Not Applicable","Missing","Not Collected","Not Provided","Restricted Access"]);for(const _ of e.getTrimmedData(e.hot)){const c=[];for(const[s,l]of t){if("HC_CURRENT_ID"===s){c.push("SARS-CoV-2");continue}if("VE_SYMP_AVAIL"===s){const e=_[a["signs and symptoms"]]||"";c.push(e?"Y":"N");continue}if("HC_COLLECT_DATE"===s){let t=_[a["sample collection date"]]||"";const o=_[a["sample collection date precision"]];c.push(e.setDateChange(o,t,"01"));continue}if("PH_SPECIMEN_SOURCE"===s){let e="";for(const t of["host (scientific name)","host (common name)","environmental material","environmental site"]){let o=_[a[t]];if(o&&!i.has(o)){if(o=o.toLowerCase(),"host (scientific name)"===t||"host (common name)"===t){e="homo sapiens"===o||"human"===o?"Human":"ANIMAL";break}if("environmental material"===t||"environmental site"===t){e="ENVIRO";break}}}c.push(e);continue}let t=e.getMappedField(s,_,l,o,a,";","NML_LIMS"),r=t.split(";");if(r=r.map((t=>e.fixNullOptionCase(t.trim(),n))),r.length>1){let e=new Set(r);i.forEach(Set.prototype.delete,e),0==e.size&&(e=new Set(r)),r=[...e]}t=r.join(";"),c.push(t)}s.push(c)}return s}}}}}]);