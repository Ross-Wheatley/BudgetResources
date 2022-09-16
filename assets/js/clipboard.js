//Joint Subscriptions
function SubscriptionsFunction() {
    var copyText = document.getElementById("SubscriptionsInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("SubscriptionsTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function SubscriptionsoutFunc() {
    var tooltip = document.getElementById("SubscriptionsTooltip");
    tooltip.innerHTML = "Copy to Clipboard";
  }