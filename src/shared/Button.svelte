<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button class:flat={flat} class:inverse={inverse} class={type} on:click>
  <slot></slot>
</button>

<style>
  button{
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  }
  .flat{
    box-shadow: none;
  }
  .primary{
    background: #365f91;
    color: white;
  }
  .secondary{
    background: #548dd4;
    color: white;
  }
  .primary.inverse{
    color: #365f91;
    background: white;
    border: 2px solid #548dd4;
  }
  .secondary.inverse{
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
</style>