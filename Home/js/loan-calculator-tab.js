var loanType;$(document).ready((function(){LoanCalculatorTab.Init()}));var interestRate=0,amount=0,tenor=0,usedInterestRate=0,LoanCalculatorTab=LoanCalculatorTab||{Init:function(){$('.loan-tabs a[data-toggle="tab"]').on("show.bs.tab",(function(a){let t=$(a.target).data("target");$(t).addClass("active show").siblings(".tab-pane.active").removeClass("active show"),loanType=$(this).attr("data-loantype"),interestRate=$(this).attr("data-interest-rate"),usedInterestRate=$(this).attr("data-used-interest-rate"),LoanCalculatorTab.CalculateRewards(loanType)})),$(".js-calculator-earn-range-slider").ionRangeSlider({hide_min_max:!0,onFinish:function(){LoanCalculatorTab.CalculateRewards()}}),$(".carused").click((function(){LoanCalculatorTab.CalculateRewards()})),$(".carnew").click((function(){LoanCalculatorTab.CalculateRewards()})),this.CalculateRewards()},CalculateRewards:function(a){null!=a&&""!=a||(a=$("ul.loan-tabs li a.active").data("loantype")),$("div.active input.js-calculator-earn-range-slider").each((function(){0==interestRate&&(interestRate=$("ul.loan-tabs li a.active").data("interest-rate")),0==usedInterestRate&&(usedInterestRate=$("ul.loan-tabs li a.active").data("used-interest-rate")),$(this).data("istenor").includes("True")?tenor=parseFloat($(this).val()):amount=parseFloat($(this).val())})),a&&a.includes($("ul.loan-tabs li a.active").data("auto"))?LoanCalculatorTab.CalculateAL():LoanCalculatorTab.CalculateLoan(interestRate,a)},CalculateLoan:function(a,t){var e=a/12;t&&t.includes($("ul.loan-tabs li a.active").data("home"))&&(tenor=12*parseFloat(tenor));var n=LoanCalculatorTab.PMT(e,tenor,amount);$("div.active span.monthlyPayments").html(ENBD.ConvertAmount(n)),$("div.active span.totalPayments").html(ENBD.ConvertAmount(amount))},CalculateAL:function(){var a=parseFloat(amount)*interestRate/1200;$(".carused").is(":checked")&&(a=parseFloat(amount)*usedInterestRate/1200);var t=(parseFloat(amount)+a*parseInt(tenor))/parseInt(tenor),e=Math.round(100*t)/100;$("div.active span.monthlyPayments").html(ENBD.ConvertAmount(e)),$("div.active span.totalPayments").html(ENBD.ConvertAmount(amount))},PMT:function(a,t,e,n,l){var o,r;return n||(n=0),l||(l=0),0===a?-(e+n)/t:(o=-a*e*((r=Math.pow(1+a,t))+n)/(r-1),1===l&&(o/=1+a),o=Math.abs(o.toFixed(0)))}};